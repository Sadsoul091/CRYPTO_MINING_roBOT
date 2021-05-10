/*CMD
  command: /sts
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📊 statistics
CMD*/

let deposit = Libs.ResourcesLib.userRes("deposit");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
let currency = "TRX" // Set Your Currency
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global");
let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
let hire = Libs.ResourcesLib.anotherChatRes("hire", "global")
let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
Bot.sendMessage("*📊 Bot Live Statistics*" + "\n\n👤* Total Users:* `" + tota.value().toFixed(0) + "`\n\n*➕ Total Investments:* `" + depo.value().toFixed(4) + "` *LTC*" + "\n\n*🖥 Total Hired Miners:* " + hire.value().toFixed() + "\n\n*💳 Total Withdrawn:* `" + userPayment.value().toFixed(4) + "` *LTC*")

