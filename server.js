var Express=require ('express');
var app=Express();
app.use(Express.static('public'));
app.listen('8000',()=>{
    console.log('server listening at port 8000');
}
);