import { StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

export function DropDown() {
  return (
    <Picker style={styles.container}>
      <Picker.Item label="TypeScript" />
      <Picker.Item label="C++" />
      <Picker.Item label="Python" />
    </Picker>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderColor: "#3d444d",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    color: "#9198a1",
    backgroundColor: "#151b23",
    outlineWidth: 0,
    outlineColor: "transparent",
  },
});
