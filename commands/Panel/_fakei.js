/*CMD
  command: /fakei
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
let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
depo.add(0.1)
Bot.sendMessage("_Fake total Investment increased by 0.1_")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
