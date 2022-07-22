import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "coffee.json");
const fileData = fs.readFileSync(filePath);
const data = JSON.parse(fileData);

export default function Handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(data);
  } else if (req.method === "POST") {
    const nameCoffee = req.body.name;
    const priceCoffee = req.body.price;
    const urlImageCoffee = req.body.img;
    const scoreCoffee = req.body.score;

    const newCoffee = {
      id: data.coffee[0].data.length + 1,
      name: nameCoffee,
      price: priceCoffee,
      img: urlImageCoffee,
      score: scoreCoffee + "/100",
    };

    if (newCoffee.name.includes("bio")) {
      data.coffee[1].data.push(newCoffee);
    }

    data.coffee[0].data.push(newCoffee);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "success" });
  }
}
