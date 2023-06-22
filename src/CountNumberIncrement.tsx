import { ComponentProps } from "react";

type IProps = {
  fetchNumber: number;
};

export default function incValCal(fetchNum: number, currentNum: number) {
  const incVal: number = Math.floor((fetchNum - currentNum) / 300);
  return incVal;
}
