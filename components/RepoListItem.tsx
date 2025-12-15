import { Repository } from "@/services/github/githubApi";
import { Book, GitFork, Star } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

type RepoListItemProps = {
  repo: Repository;
  rank: number;
  isFirst: boolean;
  isLast: boolean;
};

export function RepoListItem({
  repo,
  rank,
  isFirst,
  isLast,
}: RepoListItemProps) {
  const conditionalStyles = StyleSheet.create({
    firstItem: {
      borderTopWidth: 1,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    lastItem: {
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
  });

  return (
    <View
      style={[
        styles.itemContainer,
        isFirst && conditionalStyles.firstItem,
        isLast && conditionalStyles.lastItem,
      ]}>
      <View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Text style={{ color: "#f0f6fc", fontSize: 18 }}>{rank}.</Text>
          <Book color="#9198a1" size={16} />
          <Text style={styles.link}>{repo.fullName}</Text>
        </View>
      </View>
      <Text style={{ color: "#9198a1" }}>{repo.description}</Text>
      <View style={{ flexDirection: "row", gap: 28, alignItems: "center" }}>
        <View>
          <Text style={{ color: "#9198a1" }}>{repo.mainLanguage}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Star color="#9198a1" size={16} />
          <Text style={{ color: "#9198a1" }}>
            {repo.stars.toLocaleString()}
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <GitFork color="#9198a1" size={16} />
          <Text style={{ color: "#9198a1" }}>
            {repo.forks.toLocaleString()}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    gap: 20,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#3d444d",
  },
  link: {
    fontSize: 18,
    color: "#4493F8",
  },
});
