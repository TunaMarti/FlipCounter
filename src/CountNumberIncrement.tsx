import { ComponentProps } from "react";

type IProps = {
  fetchNumber: number;
};

export default function incValCal(
  fetchNum: number,
  currentNum: number,
  msFetch: number,
  msNumb: number
) {
  const incVal: number = Math.ceil(
    (fetchNum - currentNum) / (msFetch / msNumb)
  );
  return incVal;
}
