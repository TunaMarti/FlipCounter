import axios from "axios";

async function fetchData(): Promise<number> {
  const url = "https://localhost:44333/Buyapar/GetCounter"; // Replace with your API endpoint
  const response = await axios.get(url, {
    headers: {
      AuthorizationKey:
        "BY-API-KEY:MTAxNzk5MjQtNjllNy00MWUyLTliY2MtYzI3NGVjMjg3ODJk",
    },
  });
  // .then((response) => {
  //   // Handle the API response here
  //   console.log(response.data.data.count);
  //   return parseFloat(response.data.data.count);

  // })
  // .catch((error) => {
  //   // Handle any errors that occurred during the API request
  //   console.error(error);
  //   return 0;
  // });
  return response.data.data.count;
}

export default fetchData;
