/*CMD
  command: /demodepo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Fake Deposit amount :
  keyboard: 
  aliases: 
CMD*/


var amount = message
var amountt = amount*10000
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
var txn_id = "7ffb1bd7a4117a58580d069fb80a1d28943bcc5dd1f08c0a58ac045b63c8ff52"
let pchannel = Bot.getProperty("pchannel")
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";

// see another fields by
//Bot.sendMessage(inspect(options));

if (amount>= 0.001 && amount <=15){
Bot.sendMessage ("*✅ Your Deposit Confirmed* " + "\n\n*💴 Invested Amount:* " +amount+  " *LTC*" + "\n\n*Your deposit has been converted to Gems 💎.*" + "\n\n*➕ Total Received Gems :* " + amountt + " *💎*");
  Api.sendMessage ({chat_id: "-1001253703667"+pchannel+"", text: "*❤️ New Deposit Received ❤️*" + "\n\n🔸 Status: Confirmed" +
    "\n *🔸Amount Deposited: * " +
amount + "* LTC * \n *🔸Name:* " + info + "\n * \n🌐 Transaction ID:  *" + "\n ["+ txn_id + "]" +"(https://tx.botdev.me/LTC/" + txn_id + "\n)" + "\n",parse_mode : "Markdown" , disable_web_page_preview: true
})
}

