require("dotenv").config();
const express = require("express");
const cors = require("cors");
 const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API is live on ${PORT}`);
});

app.get("/week4", (req,res) => {
res.send("Week4 Todo API is ready!");
});

let todo = {
  id: 1, task: "Finish week4 video", completed: false,
  id: 2, task: "Do the exam", completed: false,
}

app.get("/week4",(req,res) => res.status(201).json(todo));

app.post("/week4",(req,res) => {
const{task} = req.body;
if(!task) return res.status(400).json({error: "Task is required"});
const newTodo = {id: todo.lenght + 1,task,completed: false};
todo.push(newtodo);
res.status(201).json(newTodo);

});