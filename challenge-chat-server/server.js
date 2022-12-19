const express = require("express");
const app = express();

app.use(express.json());
const port = 6060;

const message = {
  id: 0,
  name: "Jas",
  message: "Welcome to my chat server!",
};

const messages = [message];

//create new message

app.post("/messages", (req, res) => {
  const { name, message } = req.body;

  const newMessages = {
    id: messages.length,
    name,
    message,
  };

  if (!newMessages.name || !newMessages.message) {
    return res.status(400).json("Please include a name and message");
  }
  messages.push(newMessages);
  res.send(messages);
});
app.listen(port, function () {
  console.log(`Listen in http://localhost:${port}`);
});
