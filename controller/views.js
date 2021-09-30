const Views = require('../models/views')

const todoViews = async (req, res) => {
    const {todoTitle, likes, ratings,  userId, todoId } = req.body;
  
    const findView = await Views.findOne({ todoId: todoId });
    if (findView == undefined) {
      const View = new View({
        todoTitle, 
        likes, 
        ratings,
        userId,
        todoId,
      });
      const viewed = await View.save();
  
      if (viewed) {
        return res.status(201).json({
          message: "successfull",
        });
      }
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  }

module.exports = {todoViews}