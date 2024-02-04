const express=require('express')
const path=require('path')
const app=express()
const hbs=require('hbs')
const port=process.env.PORT || 8000;

const static_path=path.join(__dirname,'../public');
const templatePath=path.join(__dirname,'../templates/views')
const partials_path=path.join(__dirname,'../templates/partials')

app.use(express.static(static_path))
app.set('view engine','hbs')
app.set('views',templatePath)
hbs.registerPartials(partials_path)

app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render('404error',{
        errormsg:"Opps Page Not Found"
    })
})

app.listen(port,()=>{
    console.log(`Listeninig to the port no ${port}`)
})