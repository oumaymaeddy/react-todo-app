const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connexion à la base de données
const db = new Database("./todos.db");

// Création de la table
db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL
  )
`);

// GET — Récupérer tous les todos
app.get("/todos", (req, res) => {
  const todos = db.prepare("SELECT * FROM todos ORDER BY id DESC").all();
  res.json(todos);
});

// POST — Ajouter un todo
app.post("/todos", (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res.status(400).json({ error: "Le texte est obligatoire" });
  }

  const result = db.prepare("INSERT INTO todos (text) VALUES (?)").run(text);
  res.json({ id: result.lastInsertRowid, text });
});

// DELETE — Supprimer un todo
app.delete("/todos/:id", (req, res) => {
  db.prepare("DELETE FROM todos WHERE id = ?").run(req.params.id);
  res.json({ message: "Todo supprimée" });
});

app.listen(PORT, () => {
  console.log(`Backend lancé sur http://localhost:${PORT}`);
});