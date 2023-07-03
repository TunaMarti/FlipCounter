import { StyleSheet, Text, View } from "react-native";
import { _FlipNumbers } from "./src/CountFunc";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import fetchData from "./src/APIRequest";
import incValCal from "./src/CountNumberIncrement";
import fetchDataAndCalculateIncrement from "./src/FetchDataAndCalculateIncrement";

const milliseconds = {
  msFetch: 30000,
  msNumber: 1000,
};

export default function App() {
  const [number, setNumber] = useState<number>(0);
  const [incVal, setIncVal] = useState<number>(0);
  const [fetchNumber, setFetchNumber] = useState<number>(0);

  useEffect(() => {
    fetchDataAndCalculateIncrement(setFetchNumber);

    const fetchInterval = setInterval(
      () => fetchDataAndCalculateIncrement(setFetchNumber),
      milliseconds.msFetch
    );
    return () => clearInterval(fetchInterval);
  }, []);

  useEffect(() => {
    const calculatedIncVal = incValCal(
      fetchNumber,
      number,
      milliseconds.msFetch,
      milliseconds.msNumber
    );
    setIncVal(calculatedIncVal);
  }, [fetchNumber]);

  useEffect(() => {
    const incrementInterval = setInterval(() => {
      setNumber((prevNumber) => {
        const nextNumber = prevNumber + incVal;

        if (nextNumber >= fetchNumber) {
          clearInterval(incrementInterval);
          return fetchNumber;
        }

        return nextNumber;
      });
    }, milliseconds.msNumber);

    return () => clearInterval(incrementInterval);
  }, [incVal, fetchNumber]);

  return (
    <View style={[styles.container, { width: Dimensions.get("window").width }]}>
      <View style={styles.insider}>
        <_FlipNumbers
          height={40}
          width={40}
          color="white"
          background="black"
          isPlay
          numbers={number.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  insider: {
    flexDirection: "row",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
