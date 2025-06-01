const { createClient } = require('redis');
require('dotenv').config();

const client = createClient({
  url: process.env.REDIS_URL
});

client.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

(async () => {
  try {
    await client.connect();
    console.log("Успешно подключено к Redis");
  } catch (error) {
    console.error("Не удалось подключиться к Redis:", error);
  }
})();

module.exports = client;
