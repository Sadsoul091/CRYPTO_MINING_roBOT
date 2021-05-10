/*CMD
  command: /exch
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var refco = Libs.ResourcesLib.userRes("refco")
var balance = Libs.ResourcesLib.userRes("balance")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
var amount = 10000 * message
let info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
let value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}

if(message < 0.0001){
Bot.sendMessage("❌ Minimum amount to exchange 0.0001 LTC")
}else{
if(message > balance.value()){
Bot.sendMessage("_🚫 You Can Exchange Maximum:_ " +balance.value().toFixed(6)+ " _LTC_")
}else{
balance.add(-message)
refco.add(amount)
Bot.sendMessage("*🔄 Exchange Successful*" + "\n\n*💎 You received* *" +amount+ "* *Gem*" )
}
}
