const TelegramBot = require('node-telegram-bot-api');

const token = '5548457415:AAEQZUk5h7ngVol_kHo5Z1EHnPtqb9aVRtg';
const url = 'https://vk.link/lashmaker_tasha'
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Привет, я твой виртуальный помощник!',
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Посмотреть услуги', web_app: { url: url } }]
                ]
            }
        });
});