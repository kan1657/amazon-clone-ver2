const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JqWzhJnR5L2vMU3JcEcrmEYdq94f7HW053eHnLtVstGiVV5Uso7oMk9NN0yJdrzHHM9WJf1AnMibemOemSbHtJQ00ZTUxxwO6"
);

//API

// App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

//Example endpoints
//http://localhost:5001/clone-ver2/us-central1/api
