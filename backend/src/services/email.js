const sgMail = require("@sendgrid/mail");

const API_KEY = process.env.SENDGRID_API_KEY || "API_KEY";

sgMail.setApiKey(API_KEY);

function sendRaffleEmail(users) {
  const msgs = users.map(user => {
    return {
      to: user.email,
      from: "no-reply@k121.com",
      subject: "The draw was carried out",
      text: "Your secret friend is ${user.friend}</p>",
      html: `
        <html>
          <body>
            <p>Your secret friend is ${user.friend}</p>
          </body>
        </html>
      `
    };
  });

  return sgMail.send(msgs);
}

module.exports = { sendRaffleEmail };
