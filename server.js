const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
var upload = multer({dest: 'uploads/'});

app.post('/upload',upload.single('file'),function(req,res){
    res.json(req.file);
    res.end();
});





app.listen(port,function(){
    console.log("we are at " + port);
})