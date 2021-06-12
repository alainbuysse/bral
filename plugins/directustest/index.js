module.exports = {
    onPreBuild: async ({ utils, packageJson }) => {
        
    console.log("first output!");
        
    const fs = require("fs-extra");
    const fetch = require('node-fetch');
      
    fs.writeFile("./content/blog/test.md", "dummy txt", function (err) {
        if (err) return console.log(err);
            console.log('file written');
        });
    
    fetch('https://cms.bimp.be/items/pages').then(response =>{
        console.log(response,'resolved');
        return response.json(); 
    }).then((data => {
            console.log(data)
    })).catch(err =>{
        console.log('error',err)
    });
}}
