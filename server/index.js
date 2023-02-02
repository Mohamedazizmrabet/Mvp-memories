const express = require("express");
const constr = require("./controllers/item.controller");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

// app.use("/api/items", itemRoutes);
app.get("/getUserPost/:id", async (req, res) => {
  try {
    let result = await constr.selectAll(req.params.id);
    res.json(result[0]);
  } catch (error) {
    console.log(error);
  }
});
app.post("/addPost/:id", async (req, res) => {
  try {
    let result = await constr.add(
      req.body.title,
      req.params.id,
      req.body.description,
      req.body.images,
    );
    res.send("Post is added");
  } catch (error) {
    console.log(error);
  }
});
app.delete("/addDeleteP/:id/:iduser", async (req, res) => {
  try {
    console.log(req.params.id, req.params.iduser);
    let result = await constr.dele(req.params.id, req.params.iduser);
    res.status(202).send("Post deleted");
  } catch (error) {
    console.log(error);
  }
});
app.put("/updateP/:id/:iduser", async (req, res) => {
  try {
    let result = await constr.modfy(
      req.params.id,
      req.params.iduser,
      req.body.title,
      req.body.description,
    );
    res.send("update");
  } catch (error) {
    console.log(error);
  }
});
app.get("/getone/users/:email/:password",async(req,res)=>{
  let result= await constr.getOne(req.params.email,req.params.password)
  res.json(result[0])
})
app.post('/addUser',async(req,res)=>{
  try {
    await constr.adduser(req.body.username,req.body.email,req.body.password)
    res.send("ADDED")
  } catch (error) {
    console.error(error)
  }
})
app.put("/fav/:id/:iduser",async (req,res)=>{
  try {
    await constr.favu( req.params.id,req.params.iduser)
    res.send("updated")
  } catch (error) {
    console.log(error);
  }
})
app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
