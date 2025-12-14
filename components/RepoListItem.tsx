import { Repository } from "@/services/github/githubApi";
import { StyleSheet, Text, View } from "react-native";

type RepoListItemProps = {
  repo: Repository;
  rank: number;
};

export function RepoListItem({ repo, rank }: RepoListItemProps) {
  return (
    <View style={styles.itemContainer}>
      <View>
        <View>
          <Text>{repo.fullName}</Text>
        </View>
        <Text>{rank}</Text>
      </View>
      <Text>{repo.description}</Text>
      <View>
        <Text>{repo.mainLanguage}</Text>
        <Text>{repo.stars}</Text>
        <Text>{repo.forks}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: "#3d444d",
    borderWidth: 1,
    borderRadius: 5,
  },
});
