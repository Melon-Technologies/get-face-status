import { getBestFace } from "./best_face";
import { checkFace } from "./check_face";
import { defaultConfig } from "./default_config";
import { getFaceNormalizer } from "./face_normalizer";
import { FaceStatus } from "./face_status";
import { Face, Shape, Status } from "./types";

export { FaceStatus };
export type { Face, Status };

export function getFaceStatus(faces: any, shape: Shape, options = {}) {
  const config = { ...defaultConfig, ...options };

  const facesNormalized: Face[] = getFaceNormalizer(config)(faces);

  let status: Status;
  let face: Face | null = null;

  if (facesNormalized.length === 0) {
    status = FaceStatus.NO_FACE;
  } else {
    face = getBestFace(facesNormalized, shape);
    status = checkFace(face, shape, config);
  }

  return { status, face };
}

if (typeof window !== "undefined") {
  (window as any).mt = {
    getFaceStatus: getFaceStatus,
  };
}
