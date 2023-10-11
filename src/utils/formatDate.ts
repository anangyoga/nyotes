export const formatDate = (string?: string) => {
  if (!string) return "";

  if (string.includes("/")) {
    const [day, month, year] = string.split("/");
    string = `${year}-${month}-${day}`;
  }

  const date = new Date(string);

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
};
