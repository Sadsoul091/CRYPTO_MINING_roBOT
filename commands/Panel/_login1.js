/*CMD
  command: /login1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Input Password
  keyboard: 
  aliases: 
CMD*/

var password = data.message;
var stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban ❌*");
return
}

if (data.message=="Cancel ❌"){
Bot.runCommand("main_menu")
return
}

if (password == "mithilesh"){
Bot.runCommand("/Panel");
}else{
Bot.sendMessage("*Wrong Password ❌*");
}
