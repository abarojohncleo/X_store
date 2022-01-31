const TAG = '[HELPER/EMAIL]';
const logger = require('../logger');
const nodemailer = require('nodemailer');

module.exports.sendEmail = (data) => {
  let smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secureConnection: false,
    logger: true,
    auth: {
      user: "noreply@citysavings.com.ph",
      pass: "!Thelpd3sk2019"
    }
  });

  
  let mailOptions = {
    from:'noreply@citysavings.com.ph',
    to: data.email,
    subject: "Talk To Maria | Email Verification",
    text: `Hi ${data.first_name} ${data.last_name},
    
      Clink the link below to verify your application
      Application ID: ${data.app_id}
      ${data.url}

Regards,
Talk To Maria Bot
      `
  }

  return new Promise ((resolve, reject) => {
    smtpTransport.sendMail(mailOptions, function(err, res){
      const ACTION = '[sendMail]';
      logger.log('info', `${TAG}${ACTION}`);

      if(err){
        reject(err);
      }else{
        resolve(res);
      }
    })
  })

}