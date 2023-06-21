import { StyleSheet, Text, View } from "react-native";
import { _FlipNumbers } from "./src/CountFunc";
import { useEffect, useState, version } from "react";
import { Dimensions } from "react-native";
import axios from "axios";
import fetchData from "./src/APIRequest";

export default function App() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const t = setInterval(async () => {
      setNumber(await fetchData());
    }, 10);

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
