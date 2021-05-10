/*CMD
  command: /link
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: `SEND YOUR BOT LINK ⏩⏩`
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+"" ){
Bot.sendMessage("✅ Done: Refer Link Successfully Set is\n "+"`"+message+"`");
Bot.setProperty("link" , message,"string")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
