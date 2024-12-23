var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vinay.mcscet68@gmail.com',
    pass: 'xcfr sheb wkdq rlgf'
  }
});

var mailOptions = {
  from: 'vinay.mcscet68@gmail.com',
  to: 'mamtakashyap95@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Love You!, That was so easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});