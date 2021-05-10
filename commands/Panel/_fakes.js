/*CMD
  command: /fakes
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
var key = [[{title:"💳 Fake Total Withdrawn",command:"/fakew"}],[{title:"👤 Total Investors",command:"/faket"}],[{title:"➕ Fake Total Investment",command:"/fakei"}]]

Bot.sendInlineKeyboard(key,"*Hey* " +user.first_name+ " \n*Welcome To Fake Statistcs*" + "\n\n🌐 _Coded_ _by_ @mithi2005")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
