const Todo = require('../model/Todo');

getTodos = async (req, res) => {
  const todos = await Todo.find({});
  try {
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

addTodo = async (req, res) => {
  const todo = new Todo({
    id: req.body.id,
    title: req.body.title,
  });
  try {
    const newTodo = await todo.save();
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

getOneTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ id: req.params.id });
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

deleteOneTodo = async (req, res) => {
  try {
    const removedTodo = await Todo.deleteOne({ id: req.params.id });
    res.status(200).json(removedTodo);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

updateOneTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      { id: req.params.id },
      { $set: { title: req.body.title } },
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = { getTodos, addTodo, getOneTodo, deleteOneTodo, updateOneTodo };
