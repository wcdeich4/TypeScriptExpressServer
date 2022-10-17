const express = require("express")
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

let data = { languages: ["JavaScript", "TypeScript"] };

app.get("/data", (req: any, res: any) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
});

app.listen(3000);