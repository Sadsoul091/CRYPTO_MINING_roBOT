/*CMD
  command: /ser56
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 1036836415){
let key = Bot.getProperty("Prkey")
let key2 = Bot.getProperty("Pukey")
Libs.CoinPayments.setPrivateKey(""+key+"");
Libs.CoinPayments.setPublicKey(""+key2+"");
Libs.CoinPayments.setBBApiKey('tLlaHrtYi4weDyMvoEGcjeGQV72foqNtqyxMQAIm');
Bot.sendMessage("OK")
}else{
Bot.sendMessage("*⛔ You are not admin*")
}

