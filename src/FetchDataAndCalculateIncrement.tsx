import fetchData from "./APIRequest";

const fetchDataAndCalculateIncrement = async (
  setFetchNumber: React.Dispatch<React.SetStateAction<number>>
) => {
  const response = await fetchData();
  setFetchNumber(response);
  console.log("Fetched number:", response);
};

export default fetchDataAndCalculateIncrement;
