import { Octokit } from "octokit";

// https://docs.github.com/en/rest/guides/scripting-with-the-rest-api-and-javascript?apiVersion=2022-11-28

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

/*
const octokit = new Octokit({
  auth: process.env.EXPO_PUBLIC_GITHUB_TOKEN,
});
*/

export async function fetchRepositories() {
  const octokit = getOctokitInstance();

  if (!octokit) {
    return;
  }

  try {
    const response = await octokit.request("GET /search/repositories", {
      q: "language:python",
      sort: "stars",
      order: "desc",
      per_page: 10,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    return response;
  } catch (error) {
    console.error("Octokit Request Failed:", error);
    throw error;
  }
}
