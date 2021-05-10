/*CMD
  command: /pukey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send your new Public Key :
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
Bot.sendMessage("✅ Done: Your New Private Key is\n "+"`"+message+"`");
Bot.setProperty("Pukey" , message,"string")
Bot.runCommand("/ser56")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}
