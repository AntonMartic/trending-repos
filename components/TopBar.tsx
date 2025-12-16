import { DropDown } from "@/components/DropDown";
import { LANGUAGES, TIME_PERIODS } from "@/utils/utils";
import { StyleSheet, Text, View } from "react-native";

type TopBarProps = {
  language: string;
  setLanguage: (val: string) => void;
  period: string;
  setPeriod: (val: string) => void;
};

export function TopBar({
  language,
  setLanguage,
  period,
  setPeriod,
}: TopBarProps) {
  return (
    <View style={styles.topbar}>
      <Text style={styles.header}>🚀 Trending GitHub repos.</Text>
      <View style={styles.filters}>
        <View style={styles.filterItem}>
          <Text style={styles.label}>Language</Text>
          <DropDown
            selectedValue={language}
            onValueChange={setLanguage}
            data={LANGUAGES}
          />
        </View>
        <View style={styles.filterItem}>
          <Text style={styles.label}>Date</Text>
          <DropDown
            selectedValue={period}
            onValueChange={setPeriod}
            data={TIME_PERIODS}
          />
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
