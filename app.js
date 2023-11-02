const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');


app.use(bodyParser.json()); // For parsing JSON data
app.use(bodyParser.urlencoded({ extended: true }));





const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'rolesonjg96@gmail.com',
    pass: 'kygk bnod qwrf ppzi '
  }
});





app.post('/sendEmail', async (req, res) => {

  console.log(req.body);
  const mailOptions = {
    from: 'rolesonjg96@gmail.com',
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text,
  };
  // console.log(mailOptions, "mailoptions");

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email could not be sent.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully.');
    }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


