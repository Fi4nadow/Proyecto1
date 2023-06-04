const mineflayer = require('mineflayer');
const Movements = require('mineflayer-pathfinder').Movements;
const pathfinder = require('mineflayer-pathfinder').pathfinder;
const { GoalBlock } = require('mineflayer-pathfinder').goals;

const config = require('./settings.json');
const express = require('express');
const { createServer } = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot Is Ready')
});

const server = createServer(app);
server.listen(3000, () => {
  console.log('Server started');
});

const keepAlive = () => {
  setInterval(() => {
    http.get('https://minecraft-bot.conerfiber60.repl.co');
  }, 5 * 60 * 1000); // Cada 5 minutos
};

keepAlive();

const http = require('http');

function createBot() {
  const bot = mineflayer.createBot({
    username: config['bot-account']['username'],
    password: config['bot-account']['password'],
    auth: config['bot-account']['type'],
    host: config.server.ip,
    port: config.server.port,
    version: config.server.version,
  });

  bot.loadPlugin(pathfinder);
  const mcData = require('minecraft-data')(bot.version);
  const defaultMove = new Movements(bot, mcData);
  bot.settings.colorsEnabled = false;

  bot.once('spawn', () => {
    console.log('\x1b[33m[BotLog] Bot joined to the server', '\x1b[0m');

    // Resto del código del evento 'spawn'

  });

  // Resto de los eventos del bot

}

createBot();
