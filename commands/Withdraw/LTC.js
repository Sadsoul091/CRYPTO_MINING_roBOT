/*CMD
  command: LTC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var mini = Bot.getProperty("mini")
var res = Libs.ResourcesLib.userRes("balance");
if(res.value() < ""+mini+"" ){
Bot.sendMessage("❌ Minimum amount to withdraw "+mini+"")
}else{
Bot.sendKeyboard("🔙 Back","📤 _How many LTC you want to withdraw?_\n\n*Minimum:* `"+mini+"`"+"\n"+"*Maximum:* `"+res.value().toFixed(8)+"`*\n"+"*\n_Maximum amount corresponds to your balance_"+"\n\n"+"*➡️ Send now the amount of you want to withdraw*")
Bot.runCommand("/withltc")
}
