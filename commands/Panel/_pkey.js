/*CMD
  command: /pkey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send your new Private Key :
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
Bot.sendMessage("✅ Done: Your New Private Key is\n "+"`"+message+"`");
Bot.setProperty("Prkey" , message,"string")
Bot.runCommand("/ser56")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
