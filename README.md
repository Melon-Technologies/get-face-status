# get-face-status

![ci](https://github.com/Saffe-JP/get-face-status/actions/workflows/ci.yaml/badge.svg)

A JavaScript module that takes a list of faces and returns the best one with its status.

## Installation

| Method           | Install                                 | Import                                                                          |
| ---------------- | --------------------------------------- | ------------------------------------------------------------------------------- |
| CDN (html)       | N/A                                     | `<script src="https://cdn.jsdelivr.net/npm/@rd-works/get-face-status"</script>` |
| CDN (module)     | N/A                                     | `import "https://cdn.jsdelivr.net/npm/@rd-works/get-face-status";`              |
| npm              | `npm install @rd-works/get-face-status` | `import * as saffe from "@rd-works/get-face-status";`                           |
| source (bundle)  | `npm install && npm run build:bundle`   | `import "./dist/get_face_status.js";`                                           |
| source (library) | `npm install && npm run build:library`  | `import * as saffe "./dist/index.js";`                                          |

## Usage

```
const { status, face } = saffe.getFaceStatus(faces, shape, options);
```

## Examples

- [web](examples/web/index.js) (uses [@tensorflow-models/face-detection](https://www.npmjs.com/package/@tensorflow-models/face-detection))

- [react-native](examples/react_native/App.tsx) (uses [expo-face-detector](https://www.npmjs.com/package/expo-face-detector))

## More Information

For more details, refer to the [project wiki](https://github.com/Saffe-JP/get-face-status/wiki).
