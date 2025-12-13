import { DropDown } from "@/components/DropDown";
import { StyleSheet, Text, View } from "react-native";

export function TopBar() {
  return (
    <View style={styles.topbar}>
      <Text style={styles.header}>🚀 Trending GitHub repos.</Text>
      <View style={styles.filters}>
        <View style={styles.filterItem}>
          <Text style={styles.label}>Language</Text>
          <DropDown />
        </View>
        <View style={styles.filterItem}>
          <Text style={styles.label}>Date</Text>
          <DropDown />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    width: "100%",
    padding: 20,
    gap: 20,
    borderBottomColor: "#3d444d",
    borderBottomWidth: 1,
  },
  header: {
    color: "#f0f6fc",
    fontSize: 26,
  },
  filters: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  filterItem: {
    gap: 10,
    flex: 1,
  },
  label: {
    color: "#9198a1",
  },
});
