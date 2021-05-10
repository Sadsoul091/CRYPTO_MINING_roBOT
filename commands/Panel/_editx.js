/*CMD
  command: /editx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send new Support Text :
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
Bot.sendMessage("✅ Done: Your New Support Text is\n "+"`"+message+"`");
Bot.setProperty("ST" , message,"string")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
