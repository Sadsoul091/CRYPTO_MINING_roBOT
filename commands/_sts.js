/*CMD
  command: /sts
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: š statistics
CMD*/

let deposit = Libs.ResourcesLib.userRes("deposit");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
let currency = "TRX" // Set Your Currency
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global");
let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
let hire = Libs.ResourcesLib.anotherChatRes("hire", "global")
let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
Bot.sendMessage("*š Bot Live Statistics*" + "\n\nš¤* Total Users:* `" + tota.value().toFixed(0) + "`\n\n*ā Total Investments:* `" + depo.value().toFixed(4) + "` *LTC*" + "\n\n*š„ Total Hired Miners:* " + hire.value().toFixed() + "\n\n*š³ Total Withdrawn:* `" + userPayment.value().toFixed(4) + "` *LTC*")

