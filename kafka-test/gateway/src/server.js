const { Kafka, logLevel } = require('kafkajs');

const express = require('express');

const routes = require('./routes/index');

const kafka = new Kafka({
  clientId: '1help',
  brokers: ['localhost:9092'],
  retry: {
    maxRetryTime: 30000,
    initialRetryTime: 300,
    retries: 5,
  },
  logLevel: logLevel.ERROR,
});

const app = express();

const producer = kafka.producer();

app.use((request, response, next) => {
  request.producer = producer;
  return next();
});

app.use(express.json());
app.use(routes);

const port = 3333;

async function run() {
  await producer.connect();

  app.listen(port, () => {
    console.log(`♥ Server started on port ${port}!`);
  });
}

run().catch(console.error);
