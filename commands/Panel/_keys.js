/*CMD
  command: /keys
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
var key = [[{title:"Private Key",command:"/pkey"},{title:"Public Key",command:"/pukey"}]]

Bot.sendInlineKeyboard(key,"Welcome here, You can change your Coinpayemnts Api Keys")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
