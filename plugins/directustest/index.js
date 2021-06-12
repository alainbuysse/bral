
module.exports = {
  onPreBuild: async ({ utils, packageJson }) => {
    
    
  console.log("test 1!")
      const fs = require("fs-extra");
      const fetch = require('node-fetch');
    
    fs.writeFile("./content/blog/ba.md", "test.data[0].title", function (err) {
        if (err) return console.log(err);
        console.log('Hello World3 > helloworld3.md');
      })
  
      }
  }
