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
          fs.unlink(`content/blog//${file}`, (err) => {
            if (err) throw err;
          });
        });
      }
    });
    
        //import modules and define some terms
        try {
            console.log('api nog niet uitgelezen');
        //get sanity data
            fetch('https://cms.bimp.be/items/pages')
    .then(res => res.text())
    .then(text => {console.log(text);
                  console.log('api uitgelezen');
                  });
            
        //then output as md files in our content folder
        } catch (error) {
            utils.build.failBuild('Failure message', { error })
          }
        },
    }
