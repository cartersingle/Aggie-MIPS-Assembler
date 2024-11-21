export const buildLabelTable = (lines: string[]) => {
  let lineCount = 0;

  const labelTable: {
    [key: string]: number | undefined;
  } = {};

  const processedLines = lines.reduce<string[]>((acc, line) => {
    if (line.endsWith(":")) {
      labelTable[line.replace(":", "")] = lineCount;

      return acc;
    }

    lineCount++;
    return [...acc, line];
  }, []);

  return {
    labelTable,
    labelTableLines: processedLines,
  };
};
