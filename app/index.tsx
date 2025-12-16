import { TopBar } from "@/components/TopBar";
import { fetchRepositories } from "@/services/github/githubApi";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { RepoListItem } from "../components/RepoListItem";

import { Repository } from "@/services/github/githubApi";

export default function Index() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [language, setLanguage] = useState<string>("python");
  const [period, setPeriod] = useState<string>("");

  useEffect(() => {
    const loadRepos = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetchRepositories(language, period);
        setRepos(response);
        console.log("API Response Data:", response);
      } catch (e) {
        setError("Error: Failed to load repositories.");
        console.error("Error during API call in useEffect:", e);
      } finally {
        setIsLoading(false);
      }
    };

    loadRepos();
  }, [language, period]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <View>
          <ActivityIndicator size="small" color="#f0f6fc" />
          <Text>Loading repositories...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View>
          <Text>{error}</Text>
        </View>
      );
    }

    if (repos.length === 0) {
      return (
        <View>
          <Text>No repositories found!</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={repos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <RepoListItem
            repo={item}
            rank={index + 1}
            isFirst={index === 0}
            isLast={index === repos.length - 1}
          />
        )}
        style={styles.repoList}
      />
    );
  };

  return (
    <View style={styles.body}>
      <TopBar
        language={language}
        setLanguage={setLanguage}
        period={period}
        setPeriod={setPeriod}
      />
      <View style={styles.scroll}>{renderContent()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#0d1117",
  },
  scroll: {
    flex: 1,
  },
  repoList: {
    padding: 20,
  },
});
