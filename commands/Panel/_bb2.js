/*CMD
  command: /bb2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send amount:
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+""){
let amount = parseFloat(message)
let tgid = User.getProperty("id")
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
res.add(parseFloat(amount))
Bot.sendMessage("*The amount " +amount+ " LTC has been added to the User ID: * "   +tgid+ " * balance*");
Bot.sendMessageToChatWithId(tgid,"*🎁 You have just received " + amount + " LTC from admin.*");
}else{
Bot.sendMessage("*⛔ You are not admin*")
}

//You need to send amount after

