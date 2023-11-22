import { FaceStatus } from "./face_status";
import { Box, Config, Face, Shape } from "./types";

export function checkMargin(box: Box, shape: Shape, config: Config) {
  let status = FaceStatus.OK;

  if (box.xMin / shape.width < config.checkFaceLeftMargin) {
    status = config.selfieMode ? FaceStatus.MOVE_RIGHT : FaceStatus.MOVE_LEFT;
  } else if (box.xMax / shape.width > 1 - config.checkFaceRightMargin) {
    status = config.selfieMode ? FaceStatus.MOVE_LEFT : FaceStatus.MOVE_RIGHT;
  } else if (box.yMin / shape.height < config.checkFaceBottomMargin) {
    status = FaceStatus.MOVE_DOWN;
  } else if (box.yMax / shape.height > 1 - config.checkFaceTopMargin) {
    status = FaceStatus.MOVE_UP;
  }

  return status;
}

export function checkSize(box: Box, shape: Shape, config: Config) {
  let status = FaceStatus.OK;

  const widthRatio = (box.xMax - box.xMin) / shape.width;

  if (widthRatio < config.checkFaceMinSize) {
    status = FaceStatus.MOVE_IN;
  } else if (widthRatio > config.checkFaceMaxSize) {
    status = FaceStatus.MOVE_OUT;
  }

  return status;
}

export function checkFace(face: Face, shape: Shape, config: Config) {
  let status = FaceStatus.OK;

  if (status == FaceStatus.OK) {
    status = checkMargin(face.box, shape, config);
  }

  if (status == FaceStatus.OK) {
    status = checkSize(face.box, shape, config);
  }

  return status;
}
