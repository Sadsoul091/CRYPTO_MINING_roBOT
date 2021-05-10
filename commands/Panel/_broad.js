/*CMD
  command: /broad
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Input Message :
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
  let msg = " "+ message +" "
  Bot.sendMessageToAllChats(msg)
  Bot.sendMessage("✅ Message sent to all active members")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
