import axios from "axios";
import { useState } from "react";

const fetchData = async (): Promise<number> => {
  const url = "https://buyapar.com.tr/api/Buyapar/GetCounter"; // Replace with your API endpoint
  // try {
  const response = await axios.get(url, {
    headers: {
      AuthorizationKey:
        "BY-API-KEY:MTAxNzk5MjQtNjllNy00MWUyLTliY2MtYzI3NGVjMjg3ODJk",
    },
  });
  return response.data.data.count;
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   throw error;
  // }
};

export default fetchData;
