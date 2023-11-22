/**
 * @vitest-environment jsdom
 */

import { describe, expect, test } from "vitest";
import { FaceStatus } from "../src/face_status";
import { getFaceStatus } from "../src/index";

describe("index", () => {
  const shape = { width: 100, height: 100 };
  const face1 = { box: { xMin: 50, xMax: 100, yMin: 50, yMax: 100 } };
  const face2 = { box: { xMin: 25, xMax: 75, yMin: 25, yMax: 75 } };
  const face3 = { box: { xMin: 0, xMax: 50, yMin: 0, yMax: 50 } };

  test("FaceStatus.OK", () => {
    const { status, face } = getFaceStatus([face1, face2, face3], shape);
    expect(status).toBe(FaceStatus.OK);
    expect(face).toEqual(face2);
  });

  test("FaceStatus.NO_FACE", () => {
    const { status, face } = getFaceStatus([], shape);
    expect(status).toBe(FaceStatus.NO_FACE);
    expect(face).toEqual(null);
  });
});
