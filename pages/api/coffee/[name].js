import fs from "fs";
import path from "path";

export default function getByName(req, res) {
  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "data", "coffee.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    const { name } = req.query;
    const dataFiltered = data.coffee.filter((x) => x.name === name);
    return res.status(200).json(dataFiltered);
  } 
}
