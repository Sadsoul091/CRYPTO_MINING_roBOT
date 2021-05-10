/*CMD
  command: /fakew
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
let depo = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
depo.add(0.1)
Bot.sendMessage("_Fake total withdrawn increased by 0.1 LTC_")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
