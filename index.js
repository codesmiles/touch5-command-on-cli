const fs = require("fs");

console.log(__dirname);

const writeHTML5 = () => {
  if(process.argv[2]){
    // const fileName = process.argv[2];
    const readFile = fs.readFileSync(`${__dirname}/template.html`);
    fs.writeFileSync(`${process.cwd()}/${process.argv[2]}.html`, readFile);
  }
  else{
    return console.log(`Please enter a file  example "touch5 name" it creates name.html file`);
  }
  
};
writeHTML5();

module.exports = writeHTML5;