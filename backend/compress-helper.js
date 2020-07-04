"use strict";

const archiver = require("archiver");
const path = require("path");

/**
 * @param {Array.<String>} filesPaths - Vetor com nome dos arquivos para compressão
 * @returns {WritableStream} stream para escrita do arquivo compactado
 */

exports.compressFiles = function (filesPaths) {
  const archive = archiver("zip", { zlib: { level: 9 } });

  filesPaths.forEach((filePath) => {
    const fileName = path.basename(filePath);

    archive.file(filePath, { name: fileName });
  });

  archive.finalize();

  return archive;
};
