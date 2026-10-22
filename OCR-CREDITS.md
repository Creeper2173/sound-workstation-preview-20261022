# OCR engine and model credits

The score reader runs entirely on the user's device. Images are not submitted to a remote OCR service.

- Tesseract.js 7.0.0: https://github.com/naptha/tesseract.js — Apache-2.0.
- Tesseract.js-core 7.0.0: https://github.com/naptha/tesseract.js-core — Apache-2.0.
- English model: `@tesseract.js-data/eng` 1.0.0, `4.0.0_best_int/eng.traineddata.gz`. The distribution package declares MIT; the underlying Tesseract language data is distributed under Apache-2.0: https://github.com/naptha/tessdata and https://github.com/tesseract-ocr/tessdata_best/blob/main/LICENSE.

Engine license texts are included in `ocr/v7-eng1/TESSERACT-JS-LICENSE.txt` and `ocr/v7-eng1/TESSERACT-CORE-LICENSE.txt` (Apache-2.0 full text). The engine, model and implementation are separate from the instrument sample licenses in SOUND-CREDITS.md.

Assets are copied from the exact npm packages recorded in package-lock.json by scripts/prepare-ocr.mjs. Worker/core/model URLs are same-origin and versioned under `ocr/v7-eng1/`. The browser selects the supported LSTM core. OCR assets are loaded and cached on demand; the application shell does not prefetch the complete OCR directory.

Tesseract recognizes printed text, not musical semantics. The reader extracts numbered notation and offers manual correction; octave dots, beams, ties, repeats, handwritten scores and staff notation are not promised as automatically reconstructed music.
