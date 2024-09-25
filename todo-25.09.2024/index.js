const express = require("express");
const { uuid } = require("uuidv4");
const app = express();

app.use(express.json());
const todos = [
  {
    id: uuid(),
    description: "Tarefa 1",
    completed: false,
  },
  {
    id: uuid(),
    description: "Tarefa 2",
    completed: true,
  },
  {
    id: uuid(),
    description: "Tarefa 3",
    completed: false,
  },
];
app.get("/todos", (req, res) => {
  res.json({
    todos,
    success: true,
    message: "Success",
  });
});
app.post("/todo", (req, res) => {
  const { description } = req.body;
  const todo = {
    id: uuid(),
    description,
    completed: false,
  };
  todos.push(todo);
  res.json({
    success: true,
    message: "Todo added successfully",
    todos,
  });
});
app.get("/todo/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find((element) => element.id === id);
  if (todo) {
    res.json({
      todo,
      success: true,
      message: "Success",
    });
  } else {
    res.sendStatus(404).json({
      success: false,
      message: "Todo not found",
    });
  }
});
app.listen(3000, () => console.log("Application running on port : " + 3000));
