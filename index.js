const express=require('express');
const ejs=require('ejs');
const app=express();
const port = process.env.PORT || 3000
app.use(express.static('public'));
app.set('view engine','ejs');
app.listen(port);

app.get('/',function(req,res){
    res.render('pages/index');
});