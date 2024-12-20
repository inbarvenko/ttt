export const getCHLidByDate = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toLocaleString().slice(-2);
  const string = `0610/6060/${year}${month}`;
  console.log(string);
  return string;
};
