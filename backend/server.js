"use strict";

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const router = express.Router();

const { compressFiles } = require("./compress-helper");
const pathsArquivos = [
  "./folder-to-compress/4k-image.jpg",
  "./folder-to-compress/download.jpeg",
  "./folder-to-compress/text.pdf",
  "./folder-to-compress/text.txt",
];

router.get("/api/compress", (req, res, next) => {
  console.log("teste :>> ");
  res.setHeader("content-type", "application/zip; charset=utf-8");
  res.setHeader(
    "content-disposition",
    `attachment; filename=ensaios-campanha.zip`
  );

  const compressStream = compressFiles(pathsArquivos);

  compressStream.pipe(res);
});

app.use(router);
app.use(morgan("dev"));
app.use(cors());

app.listen(3333);
