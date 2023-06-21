import { ComponentProps } from "react";
import FlipNumbers from "react-flip-numbers";
import { StyleSheet, Text, View } from "react-native";

type IProps = ComponentProps<typeof View> & {
  height: number;
  width: number;
  color: string;
  background: string;
  numbers: string;
  isPlay: boolean;
};

const _FlipNumbers = (props: IProps) => {
  console.log(Array(props.numbers.length), props.numbers.length);
  const arr = props.numbers.split("");
  return (
    <View style={styles.container}>
      {arr.map((item, index) => {
        return (
          <View style={styles.insider} key={index + "xd"}>
            <View style={styles.flipCont}>
              <FlipNumbers
                height={props.height}
                numbers={item}
                width={props.width}
                color={props.color}
                play={props.isPlay}
                perspective={1000}
              />
            </View>
            {arr.length - 1 - index != 0 &&
            (arr.length - 1 - index) % 3 == 0 ? (
              <Text
                style={[
                  styles.text,
                  { minWidth: props.width / 2, fontSize: props.height },
                ]}
              >
                {","}
              </Text>
            ) : (
              <></>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  insider: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    //   alignSelf:""
  },
  text: {
    fontSize: 50,
    color: "white",
    alignSelf: "flex-end",
    textAlign: "center",
  },
  flipCont: {
    margin: 10,
    backgroundColor: "black",
    borderRadius: 15,
  },
});

export { _FlipNumbers };
