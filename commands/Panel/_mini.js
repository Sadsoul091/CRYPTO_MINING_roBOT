/*CMD
  command: /mini
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Enter Minimum redeem value ⭕⭕
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
Bot.sendMessage("✅ Done: Now Minimum Redeem is\n "+"`"+message+"`");
Bot.setProperty("mini" , message,"string")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
