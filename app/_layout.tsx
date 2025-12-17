import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "🚀 Trending GitHub repos.",
          headerStyle: {
            backgroundColor: "#0d1117",
          },
          headerShadowVisible: false,
          headerTintColor: "#f0f6fc",
        }}
      />
    </Stack>
  );
}
