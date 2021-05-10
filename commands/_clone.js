/*CMD
  command: /clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Bb mail
  keyboard: 
  aliases: 
CMD*/

if ((user.telegramid == "657176088")){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("wow we sent the bot to your bot.business account instantly 😘")
}else{
Bot.sendMessage("not admin")}
