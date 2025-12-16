import { getDateXDaysAgo } from "@/utils/utils";
import { Octokit } from "octokit";

// https://docs.github.com/en/rest/guides/scripting-with-the-rest-api-and-javascript?apiVersion=2022-11-28

export type Repository = {
  id: number;
  fullName: string;
  repoName: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  topics: string[];
  licenseName: string | null;
  mainLanguage: string | null;
  createdAt: Date;
};

export type RawRepository = {
  id: number;
  full_name: string;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  license: { name: string } | null;
  language: string | null;
  languages_url: string;
  created_at: string;
  topics: string[];
};

function shapeRepoData(repo: RawRepository): Repository {
  return {
    id: repo.id,
    fullName: repo.full_name,
    repoName: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    topics: repo.topics,
    licenseName: repo.license ? repo.license.name : null,
    mainLanguage: repo.language,
    createdAt: new Date(repo.created_at),
  };
}

function getOctokitInstance() {
  const token = process.env.EXPO_PUBLIC_GITHUB_TOKEN;

  if (!token) {
    console.error("FATAL: GitHub Token is missing.");
    return null;
  }

  return new Octokit({
    auth: token,
  });
}

export async function fetchRepositories(
  language: string = "",
  period: string = ""
): Promise<Repository[]> {
  const octokit = getOctokitInstance();

  if (!octokit) return [];

  let query = language ? `language:${encodeURIComponent(language)}` : "";

  if (period != "") {
    const dateString = getDateXDaysAgo(parseInt(period));

    query += query ? ` created:>${dateString}` : `created:>${dateString}`;
  }

  if (!query) query = "stars:>0";

  try {
    const response = await octokit.request("GET /search/repositories", {
      q: query,
      sort: "stars",
      order: "desc",
      per_page: 10,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const rawItems = response.data.items as RawRepository[];
    const shapedRepos: Repository[] = rawItems.map(shapeRepoData);

    return shapedRepos;
  } catch (error) {
    console.error("Octokit Request Failed:", error);
    throw error;
  }
}
