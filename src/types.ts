export type Point = {
  x: number;
  y: number;
};

export type Box = {
  xMin: number;
  yMin: number;
  xMax: number;
  yMax: number;
};

export type Face = {
  box: Box;
  landmarks?: Point[];
};

export type Shape = {
  width: number;
  height: number;
};

export type Status = {
  code: number;
  text: string;
};

export type Config = {
  detectorType: string;
  selfieMode: boolean;
  bestFaceCriteria: (face: Face[], shape: Shape) => Face;
  checkFaceLeftMargin: number;
  checkFaceRightMargin: number;
  checkFaceBottomMargin: number;
  checkFaceTopMargin: number;
  checkFaceMinSize: number;
  checkFaceMaxSize: number;
};
