/*CMD
  command: /welcot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send new Welcome Text :
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
Bot.sendMessage("✅ Done: Your New Welcome Text is\n "+"`"+message+"`");
Bot.setProperty("WELCO" , message,"string")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
