const express = require('express');
const path = require("path");

const PORT = process.env.PORT || 8000;
const app = express();

app.set("view engine", "pug");
app.use(express.static(__dirname));

app.get("/",(req, res) => { 
    res.sendFile(path.join(__dirname, "home.html"));
});
 
app.get("/edit/:docID",(req, res) => {
    console.log(req.params);  
    res.sendFile(path.join(__dirname, "edit_post.html"));
});

app.get("/create",(req, res) => { 
    res.sendFile(path.join(__dirname, "create_post.html"));
}); 

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});

