import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
 .prompt([{
   message:"Enter your Url:",
   name:"url",
 }])
 .then((answers) =>{

   const url = answers.url;

   fs.writeFile("textStore.txt",url,(err)=>{

     if(err) throw err;

     console.log("File Created Sucessfully");
   });

   const qr_png = qr.image(url,{type:"png"});

  qr_png.pipe(fs.createWriteStream("image.png"));

 })
 .catch((err)=>{   // this block is executed only whenever there is an error occur
   if(err) throw err;

 });
