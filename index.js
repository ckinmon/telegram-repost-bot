var TelegramBot = require('node-telegram-bot-api')
var token = '714769451:AAHde4NBzKFwoQ3_SB_J4VP8jjh-iY0H83Y'
var bot = new TelegramBot(token, {polling: true})

bot.onText(/\/repost (.+)/, (msg, match) => {
    var chatid  = msg.chat.id
    var name = match[1].toUpperCase()
    var resp = "GOD DAMNIT " + name + "! \n\n \t\t\t**DEEP BREATH**" +  "\n\nREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEPOOOOOOOOOOOOOOOOOOOOOOOOOOOOST!"

    bot.sendMessage(chatid, resp)
})