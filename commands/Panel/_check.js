/*CMD
  command: /check
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
let msg = message
if(msg){
let check = Libs.ResourcesLib.anotherUserRes("balance", msg)
let checkk = Libs.ResourcesLib.anotherUserRes("refco", msg)
let refc = Libs.ResourcesLib.anotherUserRes("refcom", msg)
let withdraw = Libs.ResourcesLib.anotherUserRes("withdraw", msg)

Bot.sendMessage( "*๐ค  User Account Balance:*  "+
"\n\n*โ Withdrawable Balance:*"+ "\n"+ check.value().toFixed(8) + " *LTC*" + "\n\n๐ *Total Gems:* "+ "\n"+ checkk.value().toFixed(8)  +
"\n\n๐ *Total Affiliate Bonus:*"+"\n"+ refc.value().toFixed(8) + " *LTC*" +  "\n\n*๐ธTotal Withdrawn:*"+ "\n"+ withdraw.value().toFixed(8) + " *LTC*");
}else{
Bot.sendMessage("*โ You are not admin*")
}
}
