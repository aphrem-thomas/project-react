var Express=require ('express');
var app=Express();
const PORT=process.env.PORT || 8000;

// app.use(function(req,res,next){
//     if(req.headers['x-forwarded-proto']==='http'){
//         next();
//     }else{
//         res.redirect('http://'+req.hostname+req.url)
//     }

// });

app.use(Express.static('public'));
app.listen(PORT,()=>{
    console.log('server listening at port: '+PORT);
}
);