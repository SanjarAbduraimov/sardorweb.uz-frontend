// const express = require("express");
// const compression = require("compression");
// const path = require("path");
// const app = express();

// const envVeribles =
//   process.env.NODE__ENV === "development" ? "./.env.local" : "./.env";
// require("dotenv").config({ path: path.resolve(__dirname, envVeribles) });

// app.use(compression());
// app.use(express.static(path.join(__dirname, "build")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// app.listen(3000, () => console.log("React App is started on port 3000"));
// module.exports = app;
