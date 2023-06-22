import { StyleSheet, Text, View } from "react-native";
import { _FlipNumbers } from "./src/CountFunc";
import { useEffect, useState, version } from "react";
import { Dimensions } from "react-native";
import axios from "axios";
import fetchData from "./src/APIRequest";
import incValCal from "./src/CountNumberIncrement";

export default function App() {
  const [number, setNumber] = useState<number>(0);
  const [incVal, setIncVal] = useState<number>(0);
  const [fetchNumber, setFetchNumber] = useState(0);
  useEffect(() => {
    const t = setInterval(async () => {
      setFetchNumber(await fetchData());
      setNumber(fetchNumber);
      setIncVal(incValCal(fetchNumber, number));
    }, 30000);

    console.log(
      "fetchNumber: ",
      fetchNumber,
      "number: ",
      number,
      "FARK: ",
      fetchNumber - number,
      "incVal: ",
      incVal
    );

    return () => {
      clearInterval(t);
    };
  }, [fetchNumber]);

  useEffect(() => {
    const t = setInterval(() => {
      setNumber(number + incVal);
    }, 100);

    return () => {
      clearInterval(t);
    };
  }, [number]);

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
    // margin: 50,
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
  text: {},
});
