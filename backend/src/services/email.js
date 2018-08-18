const SparkPost = require("sparkpost");

const API_KEY = process.env.SPARKPOST_API_KEY || "API_KEY";

const client = new SparkPost(API_KEY);

function sendRaffleEmail(users) {
  const promises = users.map(user => {
    return client.transmissions.send({
      options: {
        sandbox: true
      },
      content: {
        from: "testing@sparkpostbox.com",
        subject: "The draw was carried out",
        html: `
          <html>
            <body>
              <p>Your secret friend is ${user.friend}</p>
            </body>
          </html>
        `
      },
      recipients: [{ address: user.email }]
    });
  });

  return Promise.all(promises);
}

module.exports = { sendRaffleEmail };
