const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const port = 3030;
const servingRoot = __dirname;

app.listen(port, () => {
    console.log("listening on port ", port);
});

app.use('/', express.static(path.join(servingRoot, 'preview')));
app.use('/creatives', express.static(path.join(servingRoot, 'creatives')));