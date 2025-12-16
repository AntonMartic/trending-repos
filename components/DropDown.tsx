import { DropdownData } from "@/utils/utils";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

type DropDownProps = {
  selectedValue: string;
  onValueChange: (value: string) => void;
  data: DropdownData[];
};

export function DropDown({
  selectedValue,
  onValueChange,
  data,
}: DropDownProps) {
  return (
    <Picker
      style={styles.container}
      selectedValue={selectedValue}
      onValueChange={onValueChange}>
      {data.map((item) => (
        <Picker.Item label={item.label} value={item.value} />
      ))}
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
