/*CMD
  command: /BALANC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: š³ balance
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
var key = [{title:"š„ Deposit History",command:"/depoh"},{title:"š¤ Withdraw History",command:"/withdrawh"},{title:"ā¢ā¢ā¢ Developer ā¢ā¢ā¢",url:"https://t.me/The_Sadsoul_X_Sadangle"}]

Bot.sendInlineKeyboard(key, "*š¦ Balance:*  " + "\n\n*š° Total Balance:* " + res.value().toFixed(8) + " *LTC*" + "\n\n*š Total Gems:* " +refco.value().toFixed() + "\n\n*š Total Affilite Bonus:* " +refcom.value().toFixed(8) + " *LTC*" + "\n\n*š³ Total Withdrawn:* " +withdraw.value().toFixed(8) + " *LTC*" + "\n\nš *LTC Live Price:* *" +TRX.toFixed(8) + "* *$* " + "\n\n*š„ Server Time:* *" +time+ "*\n" );

