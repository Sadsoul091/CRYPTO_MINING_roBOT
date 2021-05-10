/*CMD
  command: /pchannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: `⏩ Send Payment proof channel link including @`
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
Bot.sendMessage("✅ Done: Now Payment proof channel is\n "+"`"+message+"`");
Bot.setProperty("pchannel" , message,"string")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
