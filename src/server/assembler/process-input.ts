export const processInput = (data: string) => {
  const lines = data.split("\n");

  const processedLines = lines.reduce<string[]>((acc, line) => {
    if (line.trim().startsWith("#") || line.trim() === "") {
      return acc;
    }

    return [...acc, line.split("#")[0].trim()];
  }, []);

  return processedLines;
};
