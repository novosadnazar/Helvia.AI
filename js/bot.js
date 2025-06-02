const TelegramBot = require("node-telegram-bot-api");

// Встав сюди свій токен від BotFather
const token = "Helvia_AI_bot";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `Привіт, ${msg.from.first_name}! Я — твій помічник Helvia.AI.`
  );
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Напиши мені щось, і я відповім! Для початку використай команду /start."
  );
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  if (msg.text.startsWith("/")) return; // Ігноруємо команди
  bot.sendMessage(chatId, "Ти написав: " + msg.text);
});

