const express = require("express");
const cors = require("cors");

const PORT = 3000;
const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

const contacts = [
  {
    name: "João",
    phone: "1234-5678",
    operator: { name: "Tim", cod: 41 },
    selected: false,
    date: new Date(),
  },
  {
    name: "Maria",
    phone: "8765-4321",
    operator: { name: "Tim", cod: 41 },
    selected: false,
    date: new Date(),
  },
  {
    name: "Pedro",
    phone: "1234-4321",
    operator: { name: "Tim", cod: 41 },
    selected: false,
    date: new Date(),
  },
];

const operators = [
  { name: "Oi", cod: "14", category: "Celular" },
  { name: "Vivo", cod: "15", category: "Celular" },
  { name: "Tim", cod: "41", category: "Celular" },
  { name: "GVT", cod: "25", category: "Fixo" },
  { name: "Embratel", cod: "21", category: "Fixo" },
];

router.post("/contacts", (req, res) => {
  contacts.push(req.body);

  res.send({ message: "ok" });
});

router.get("/contacts", (req, res) => {
  res.send(contacts);
});

router.get("/operators", (req, res) => {
  res.send(operators);
});

app.use("/", router);

app.listen(PORT, () => console.log("Server listening on port 3000"));
