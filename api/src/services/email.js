const SparkPost = require("sparkpost");

const API_KEY = process.env.SPARKPOST_API_KEY || "API_KEY";

const client = new SparkPost(API_KEY);

function sendRaffleEmail(users) {
  users.forEach(user => {
    client.transmissions.send({
      options: {
        sandbox: true
      },
      content: {
        from: "no-reply@ukita.com",
        subject: "The draw was carried out",
        html: `
          <html>
            <body>
              <p>Your secret friend is ${friendName}</p>
            </body>
          </html>
        `
      },
      recipients: [{ address: recipient }]
    });
  });
}

module.exports = { sendRaffleEmail };
