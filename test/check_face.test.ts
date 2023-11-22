import { describe, expect, test } from "vitest";
import { checkMargin, checkSize, checkFace } from "../src/check_face";
import { defaultConfig } from "../src/default_config";
import { FaceStatus } from "../src/face_status";

describe("checkMargin", () => {
  const shape = { width: 100, height: 100 };
  const options = {
    checkFaceLeftMargin: 0.1,
    checkFaceRightMargin: 0.1,
    checkFaceTopMargin: 0.1,
    checkFaceBottomMargin: 0.1,
  };
  const config = { ...defaultConfig, ...options };

  test("FaceStatus.OK", () => {
    const box = { xMin: 30, xMax: 70, yMin: 30, yMax: 70 };
    const result = checkMargin(box, shape, config);
    expect(result).toBe(FaceStatus.OK);
  });

  test("FaceStatus.MOVE_LEFT", () => {
    const box = { xMin: 0, xMax: 40, yMin: 30, yMax: 70 };
    const result = checkMargin(box, shape, config);
    expect(result).toBe(FaceStatus.MOVE_LEFT);
  });

  test("FaceStatus.MOVE_RIGHT", () => {
    const box = { xMin: 60, xMax: 100, yMin: 30, yMax: 70 };
    const result = checkMargin(box, shape, config);
    expect(result).toBe(FaceStatus.MOVE_RIGHT);
  });

  test("FaceStatus.MOVE_DOWN", () => {
    const box = { xMin: 30, xMax: 70, yMin: 0, yMax: 40 };
    const result = checkMargin(box, shape, config);
    expect(result).toBe(FaceStatus.MOVE_DOWN);
  });

  test("FaceStatus.MOVE_UP", () => {
    const box = { xMin: 30, xMax: 70, yMin: 60, yMax: 100 };
    const result = checkMargin(box, shape, config);
    expect(result).toBe(FaceStatus.MOVE_UP);
  });

  test("FaceStatus.MOVE_LEFT selfieMode", () => {
    const box = { xMin: 60, xMax: 100, yMin: 30, yMax: 70 };
    const result = checkMargin(box, shape, { ...config, selfieMode: true });
    expect(result).toBe(FaceStatus.MOVE_LEFT);
  });

  test("FaceStatus.MOVE_RIGHT selfieMode", () => {
    const box = { xMin: 0, xMax: 40, yMin: 30, yMax: 70 };
    const result = checkMargin(box, shape, { ...config, selfieMode: true });
    expect(result).toBe(FaceStatus.MOVE_RIGHT);
  });
});

describe("checkSize", () => {
  const shape = { width: 100, height: 100 };
  const options = { checkFaceMinSize: 0.3, checkFaceMaxSize: 0.7 };
  const config = { ...defaultConfig, ...options };

  test("FaceStatus.OK", () => {
    const box = { xMin: 30, xMax: 70, yMin: 30, yMax: 70 };
    const result = checkSize(box, shape, config);
    expect(result).toBe(FaceStatus.OK);
  });

  test("FaceStatus.MOVE_IN", () => {
    const box = { xMin: 40, xMax: 60, yMin: 40, yMax: 60 };
    const result = checkSize(box, shape, config);
    expect(result).toBe(FaceStatus.MOVE_IN);
  });

  test("FaceStatus.MOVE_OUT", () => {
    const box = { xMin: 10, xMax: 90, yMin: 10, yMax: 90 };
    const result = checkSize(box, shape, config);
    expect(result).toBe(FaceStatus.MOVE_OUT);
  });
});

describe("checkFace", () => {
  const shape = { width: 100, height: 100 };
  const options = {
    checkFaceLeftMargin: 0.1,
    checkFaceRightMargin: 0.1,
    checkFaceTopMargin: 0.1,
    checkFaceBottomMargin: 0.1,
    checkFaceMinSize: 0.3,
    checkFaceMaxSize: 0.7,
  };
  const config = { ...defaultConfig, ...options };

  test("FaceStatus.OK", () => {
    const face = { box: { xMin: 30, xMax: 70, yMin: 30, yMax: 70 } };
    const result = checkFace(face, shape, config);
    expect(result).toBe(FaceStatus.OK);
  });
});
