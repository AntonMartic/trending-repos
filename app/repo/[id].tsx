import { Repository } from "@/services/github/githubApi";
import { LANGUAGES } from "@/utils/utils";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Calendar, GitFork, Link2, Scale, Star } from "lucide-react-native";
import { Text, View } from "react-native";

export default function Repo() {
  const { repo } = useLocalSearchParams();

  const repository: Repository = JSON.parse(repo as string);

  const langConfig = LANGUAGES.find(
    (l) => l.value.toLowerCase() === repository.mainLanguage?.toLowerCase()
  );
  const dotColor = langConfig?.color;

  return (
    <View style={{ backgroundColor: "#0d1117", width: "100%", height: "100%" }}>
      <Stack.Screen
        options={{
          headerTitle: repository.fullName || "Repository",
          headerStyle: {
            backgroundColor: "#0d1117",
          },
          headerShadowVisible: false,
          headerTintColor: "#f0f6fc",
        }}
      />
      <View style={{ padding: 20, gap: 20 }}>
        <Text style={{ color: "#9198a1" }}>{repository.description}</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            width: "100%",
            flexWrap: "wrap",
          }}>
          {repository.topics.map((topic, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#3d444d",
                paddingHorizontal: 6,
                paddingVertical: 2,
                borderRadius: 4,
              }}>
              <Text style={{ color: "#9198a1" }}>{topic}</Text>
            </View>
          ))}
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <View
            style={{
              backgroundColor: dotColor,
              borderRadius: 6,
              width: 12,
              height: 12,
            }}></View>
          <Text style={{ color: "#9198a1" }}>{repository.mainLanguage}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Star color="#9198a1" size={16} />
          <Text style={{ color: "#9198a1" }}>
            {repository.stars.toLocaleString()}
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <GitFork color="#9198a1" size={16} />
          <Text style={{ color: "#9198a1" }}>
            {repository.forks.toLocaleString()}
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Scale color="#9198a1" size={16} />
          <Text style={{ color: "#9198a1" }}>{repository.licenseName}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Calendar color="#9198a1" size={16} />
          <Text style={{ color: "#9198a1" }}>
            {repository.createdAt.toString().split("T", 1)[0]}
          </Text>
        </View>
        <Link href={repository.url as any}>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Link2 color="#9198a1" size={16} />
            <Text style={{ color: "#4493F8" }}>Check out on GitHub</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}
