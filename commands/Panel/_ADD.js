/*CMD
  command: /ADD
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send User id :
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb5");
}else{
Bot.sendMessage("*⛔ You are not admin*")
}

//You need to send user id after running this command
