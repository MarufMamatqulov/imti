const UZ_MONTHS = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentyabr",
  "oktyabr",
  "noyabr",
  "dekabr",
];

// `toLocaleDateString("uz-UZ", ...)` renders differently between the Node.js
// SSR pass and the browser depending on which ICU locale data is available,
// causing a hydration mismatch. Formatting manually keeps server and client
// output identical.
export function formatDate(date: string) {
  const d = new Date(date);
  return `${d.getDate()}-${UZ_MONTHS[d.getMonth()]}, ${d.getFullYear()}`;
}

// Same server/client ICU mismatch as above, for `toLocaleString("uz-UZ")`
// thousand separators (space-separated, e.g. "1 560").
export function formatNumber(value: number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
