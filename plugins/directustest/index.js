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

   return fetch('https://cms.bimp.be/items/pages', { headers: { Accept: "application/json" } })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
    
    
     fetch('https://cms.bimp.be/items/pages')
    .then(res => res.text())
    .then(data => {
          fs.writeFile("./content/blog/bal.md", "test.data[0].title", function (err) {
          if (err) return console.log(err);
          console.log(data, 'Hello World4 > helloworld4.md');
      })
     })
    .then(body => console.log(body));
    

const getWeather = async () => {
     const base = 'https://cms.bimp.be/items/pages';
     const response = await fetch(base);
     const data = await response.text();
   return data;
  };

  getWeather()
  .then(data => console.log(data))
  .then(data => {
    console.log('Hello World6 > helloworld6.md');
    fs.writeFile("./content/blog/ba.md", "test.data[0].title", function (err) {
        if (err) return console.log(err);
        console.log('Hello World3 > helloworld3.md');
      })

  })
  .catch(err => console.log(err));
    
    
    
    

      //import modules and define some terms
      try {
          fetch('https://cms.bimp.be/items/pages')
            .then(res => res.text())
            .then(text => {console.log(text);});
          
      //then output as md files in our content folder
      } catch (error) {
          utils.build.failBuild('Failure message', { error })
        }
      }
  }
