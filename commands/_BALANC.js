/*CMD
  command: /BALANC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💳 balance
CMD*/

                                                                                                                         

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd
let profit = Libs.ResourcesLib.userRes("profit");
let reinvest = Libs.ResourcesLib.userRes("reinvest");
let deposit = Libs.ResourcesLib.userRes("deposit");
let res = Libs.ResourcesLib.userRes("balance");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
let refco = Libs.ResourcesLib.userRes("refco");
let refcom = Libs.ResourcesLib.userRes("refcom");
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
let hired = Libs.ResourcesLib.userRes("hired");
var key = [{title:"📥 Deposit History",command:"/depoh"},{title:"📤 Withdraw History",command:"/withdrawh"},{title:"••• Developer •••",url:"https://t.me/The_Sadsoul_X_Sadangle"}]

Bot.sendInlineKeyboard(key, "*🏦 Balance:*  " + "\n\n*💰 Total Balance:* " + res.value().toFixed(8) + " *LTC*" + "\n\n*💎 Total Gems:* " +refco.value().toFixed() + "\n\n*🎁 Total Affilite Bonus:* " +refcom.value().toFixed(8) + " *LTC*" + "\n\n*💳 Total Withdrawn:* " +withdraw.value().toFixed(8) + " *LTC*" + "\n\n📈 *LTC Live Price:* *" +TRX.toFixed(8) + "* *$* " + "\n\n*🕥 Server Time:* *" +time+ "*\n" );

