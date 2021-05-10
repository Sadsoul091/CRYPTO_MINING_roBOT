/*CMD
  command: Result
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.body.result;
var txn_id = result.send_txid;
var wallet = result.send_address;
var amount = result.amountf;
var pchannel = Bot.getProperty("/pchannel")
Bot.sendMessage("*💵 Withdrawal Paid*\n"+"*The owner Automatically Paid your withdrawal of* " +amount+ " *LTC on your wallet*\n"+wallet+ "\n*🌐 Transaction ID:  *\n ["+ txn_id + "]" +"(https://tx.botdev.me/LTC/" + txn_id + "\n)",{disable_web_page_preview : true})


var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";

Api.sendMessage ({chat_id: ""+pchannel+"", text: "*💸 New Withdrawal Sent 💸*" +
    "\n \n" + "*🔹Status: Paid*" + "\n*🔹Name: *" +info+ "\n*🔹Amount withdrawn:* *" + amount + "* *LTC *" + "\n" + "\n*🌐 Transaction ID:  *\n["+ txn_id + "]" +"(https://tx.botdev.me/TRX/" +txn_id+ "\n)" + "\n\n*Congratulations you've received your withdrawal, Happy earnings!❤️*\nTime :- "+time+"",parse_mode : "Markdown" , disable_web_page_preview: true
});



