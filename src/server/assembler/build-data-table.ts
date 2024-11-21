export const buildDataTable = (lines: string[]) => {
  let inTable = false;
  const dataTable: {
    [key: string]: number | undefined;
  } = {};
  const dataList: number[] = [];

  const processedLines = lines.reduce<string[]>((acc, line) => {
    if (line === ".data") {
      inTable = true;
      return acc;
    }

    if (line === ".text") {
      inTable = false;
      return acc;
    }

    if (inTable) {
      const splitLine = line.split(": ");

      dataList.push(parseInt(splitLine[1]));

      dataTable[splitLine[0]] = dataList.length - 1;

      return acc;
    }

    return [...acc, line];
  }, []);

  return {
    dataTableLines: processedLines,
    dataTable,
    dataList,
  };
};
