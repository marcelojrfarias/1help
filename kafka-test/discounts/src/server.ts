import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  clientId: '1help',
  brokers: ['localhost:9092'],
  logLevel: logLevel.ERROR,
});

const consumer = kafka.consumer({ groupId: '1help-group' });
async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'get-price', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });

  console.log('♥ Consumer started!');
}

run().catch(console.error);
