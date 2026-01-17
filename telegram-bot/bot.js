require("dotenv").config();
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.API_KEY);

bot.start((ctx) =>
  ctx.reply(
    "Привет! это простой генератор паролей. Пришли мне число (длину пароля), и я сгенерирую его.",
  ),
);

bot.on("text", (ctx) => {
  const text = ctx.message.text;
  const length = Math.floor(+text);

  if (isNaN(length) || length < 4 || length > 26) {
    return ctx.reply("Пожалуйста, пришли число от 4 до 26");
  }
  const password = generatePassword(length);
  ctx.reply(`Сгенерированный пароль: \n\`${password}\``, {
    parse_mode: "Markdown",
  });
});

function getRandomNum() {
  const num = Math.random() * 10;
  return Math.floor(num).toString();
}

function getRandomSym() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  const randomSymbol = Math.floor(Math.random() * symbols.length);
  return symbols[randomSymbol];
}

function getRandomLower() {
  const lower = Math.floor(Math.random() * 26) + 97;
  return String.fromCharCode(lower);
}

function getRandomUpper() {
  const upper = Math.floor(Math.random() * 26) + 65;
  return String.fromCharCode(upper);
}

function generatePassword(length) {
  let generatedPassword = "";

  const activeFunctions = [
    getRandomNum,
    getRandomSym,
    getRandomLower,
    getRandomUpper,
  ];

  if (activeFunctions.length == 0) {
    return "";
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * activeFunctions.length);
    const randomFunc = activeFunctions[randomIndex];
    generatedPassword += randomFunc();
  }

  return generatedPassword;
}

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
bot.launch();
