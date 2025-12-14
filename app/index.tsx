import { TopBar } from "@/components/TopBar";
import { fetchRepositories } from "@/services/github/githubApi";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const runTest = async () => {
      try {
        const response = await fetchRepositories();
        console.log("API Response Data:", response);
      } catch (e) {
        console.error("Error during API call in useEffect:", e);
      }
    };

    runTest();
  }, []);

  return (
    <View style={styles.body}>
      <TopBar />
      <ScrollView style={styles.scroll}>
        <View
          style={{
            height: 1000,
            width: "100%",
            borderColor: "#3d444d",
            borderWidth: 1,
            borderRadius: 5,
          }}></View>
      </ScrollView>
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
    padding: 20,
  },
});
