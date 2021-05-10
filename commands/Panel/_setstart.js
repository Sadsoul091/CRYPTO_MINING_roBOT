/*CMD
  command: /setstart
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: *ENTER YOUR START MESSAGE⭕*
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
Bot.sendMessage("✅ Done: Now Start Message is\n "+"`"+message+"`");
Bot.setProperty("start" , message,"string")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
