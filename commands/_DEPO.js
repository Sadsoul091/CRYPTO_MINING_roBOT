/*CMD
  command: /DEPO
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ➕ deposit
CMD*/

                                                                                                         

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd

let depo = Bot.getProperty("depowall"+user.telegramid)
let depot = "*Hello friend! Deposit now to expand your farm and grow your money!*" + "\n\n_• Our minimum deposits is_ " + " *0.001 LTC (💎 10)* " + "_please do not send below_ " + " *0.001 LTC* " + " _to avoid ignoring your deposits._ " + "\n\n*Your deposits will directly convert to Gems 💎.*" + "\n\n*0.0001 LTC = 1 💎*" + "\n\n*1 LTC*" + " *~* *" +TRX.toFixed(4) + "* *$*" 
if(depo){
Bot.sendMessage(depot)
Bot.sendMessage("⚠️ _If you send less than 0.00100000 LTC, your deposit will be ignored!_\n\n✅ *Send the amount you want to deposit to the following address:*")
Bot.sendMessage(""+depo+"")}else{
Bot.sendMessage(depot)
Libs.CoinPayments.createPermanentWallet({
  currency: "LTC",
  label: "myLabel",
  onSuccess: "/onLTC",

  onIncome: "/onIncomeLTC"
});
}
