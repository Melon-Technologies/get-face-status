import { sortFaces } from "./best_face";
import { checkMargin, checkMultiFace, checkSize } from "./check_face";
import { defaultConfig } from "./default_config";
import { getFaceNormalizer } from "./face_normalizer";
import { FaceStatus } from "./face_status";
import { Face, Shape } from "./types";

export { FaceStatus };
export type { Face };

export function getFaceStatus(faces: any, shape: Shape, options = {}) {
  const config = { ...defaultConfig, ...options };
  const facesNormalized: Face[] = getFaceNormalizer(config)(faces);

  let status: FaceStatus = FaceStatus.NO_FACE;
  let face: Face | null = null;

  if (facesNormalized.length > 0) {
    const sortedFaces = sortFaces(facesNormalized, shape);
    status = FaceStatus.OK;
    face = sortedFaces[0];

    if (sortedFaces.length > 1) {
      const secondFace = sortedFaces[1];
      status = checkMultiFace(face.box, secondFace.box, config);
    }

    if (status == FaceStatus.OK) {
      status = checkMargin(face.box, shape, config);
    }

    if (status == FaceStatus.OK) {
      status = checkSize(face.box, shape, config);
    }
  }

  return { status, face };
}

if (typeof window !== "undefined") {
  (window as any).mt = {
    getFaceStatus: getFaceStatus,
    FaceStatus: FaceStatus,
  };
}
