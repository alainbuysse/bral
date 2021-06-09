module.exports = {
  onPreBuild: async ({ utils, packageJson }) => {
  console.log("my plugin loaded!")
      const fs = require("fs-extra");
      const fetch = require('node-fetch');
      
  //add any serializers for your portable text
  const serializers = {
    types: {
      code: (props) =>
        "```" + props.node.language + "\n" + props.node.code + "\n```",
    },
  };
      
  fs.readdir("./content/blog", (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((file) => {
        console.log(`Deleting: ${file}`);
        fs.remove(`content/blog//${file}`, (err) => {
          if (err) throw err;
        });
      });
    }
  });

    
    fs.writeFile("./content/blog/helloworld.md", '--- \n title: dit is de titel \n date: 2020-02-22T08:31:25.046Z \n description: kleine omschrijving \n ---!', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.md');
});
    
    

      //import modules and define some terms
      try {
          fetch('https://cms.bimp.be/items/pages')
  .then(res => res.text())
  .then(text => {console.log(text);                
                });
          
      //then output as md files in our content folder
      } catch (error) {
          utils.build.failBuild('Failure message', { error })
        }
      }
  }
