import { Config } from "./types";

export const defaultConfig: Config = {
  detectorType: "none",
  selfieMode: false,
  checkFaceLeftMargin: 0.1,
  checkFaceRightMargin: 0.1,
  checkFaceBottomMargin: 0.1,
  checkFaceTopMargin: 0.1,
  checkFaceMinSize: 0.1,
  checkFaceMaxSize: 0.6,
  checkMultiFaceAreaRatio: 0.95,
};
