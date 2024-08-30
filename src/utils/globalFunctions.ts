export const getMonth = (): string => {
  return new Date().toLocaleString("default", { month: "long" }).toUpperCase();
};

