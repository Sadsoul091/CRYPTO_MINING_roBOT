/*CMD
  command: /faket
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
let depo = Libs.ResourcesLib.anotherChatRes("tota", "global")
depo.add(20)
Bot.sendMessage("_Fake total users increased by 20_")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
