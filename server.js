const express = require('express')

const app = express()


app.set("view engine", "ejs")


app.get("/", function(req, res){
    const items = [
        {title: "D", 
        message:"Lorem ipsum dolor sit amet."
    },
    {
        title:'E',
        message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        title:'M',
        message:'Lorem ipsum dolor sit amet.'
    },
    {
        title:'A',
        message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        title:'I',
        message:'Lorem ipsum dolor sit amet.'
    },
    {
        title:'S',
        message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    ];

    const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor interdum justo, quis laoreet tortor.'
    res.render('pages/index',{
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function(req, res){
    res.render('pages/about')
})

app.listen(8080)
console.log('Rodando')

