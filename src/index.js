const express = require("express");
const mikronode = require("./test")


const app = express();

app.use(express.json());

app.get("/test", async (req, res) => {

  res.json("test Success")

});

mikronode()




app.listen(5000, () => {
  console.log("Server running on port: ", 5000);
});

