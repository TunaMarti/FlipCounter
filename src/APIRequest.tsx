import axios from "axios";

async function fetchData(): Promise<number> {
  const url = "https://buyapar.com.tr/api/Buyapar/GetCounter"; // Replace with your API endpoint
  const response = await axios.get(url, {
    headers: {
      AuthorizationKey:
        "BY-API-KEY:MTAxNzk5MjQtNjllNy00MWUyLTliY2MtYzI3NGVjMjg3ODJk",
    },
  });

  return response.data.data.count;
}

export default fetchData;
