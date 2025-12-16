export type DropdownData = {
  label: string;
  value: string;
  color?: string;
};

export const LANGUAGES: DropdownData[] = [
  { label: "Python", value: "python", color: "#3572A5" },
  { label: "Java", value: "java", color: "#b07219" },
  { label: "C++", value: "c++", color: "#f34b7d" },
  { label: "C", value: "c", color: "#555555" },
  { label: "C#", value: "c#", color: "#178600" },
  { label: "TypeScript", value: "typescript", color: "#3178c6" },
  { label: "JavaScript", value: "javascript", color: "#f1e05a" },
  { label: "Shell", value: "shell", color: "#89e051" },
  { label: "PHP", value: "php", color: "#4F5D95" },
  { label: "Go", value: "go", color: "#00ADD8" },
  { label: "R", value: "r", color: "#198CE7" },
  { label: "Dart", value: "dart", color: "#00B4AB" },
  { label: "Kotlin", value: "kotlin", color: "#A97BFF" },
  { label: "Rust", value: "rust", color: "#dea584" },
  { label: "Swift", value: "swift", color: "#F05138" },
  { label: "Ruby", value: "ruby", color: "#701516" },
  { label: "Objective-C", value: "objective-c", color: "#438eff" },
  { label: "Lua", value: "lua", color: "#000080" },
  { label: "Assembly", value: "assembly", color: "#6E4C13" },
  { label: "HTML", value: "html", color: "#e34c26" },
  { label: "Matlab", value: "matlab", color: "#e16737" },
];

export const TIME_PERIODS: DropdownData[] = [
  { label: "Today", value: "1" },
  { label: "This week", value: "7" },
  { label: "This month", value: "30" },
  { label: "Last 3 months", value: "90" },
  { label: "This year", value: "365" },
  { label: "All time", value: "" },
];

export function getDateXDaysAgo(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() - days);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
