/*CMD
  command: /reff
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Set Refer Bonus :- 
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
Bot.sendMessage("✅ Done: Your New Private Key is\n "+"`"+message+"`");
Bot.setProperty("ref" , message,"string")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
