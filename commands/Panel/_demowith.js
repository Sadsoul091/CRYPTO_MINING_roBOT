/*CMD
  command: /demowith
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send Fake withdraw amount :
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
Api.sendMessage ({chat_id: ""+pchannel+"", text: "*💸 New Withdrawal Sent 💸*" +
    "\n \n" + "*🔹Status: Paid*" + "\n*🔹Name: *" +info+ "\n*🔹Amount withdrawn:* *" + amount + "* *LTC *" + "\n" + "\n*🌐 Transaction ID:  *\n["+ txn_id + "]" +"(https://tx.botdev.me/TRX/" +txn_id+ "\n)" + "\n\n*Congratulations you've received your withdrawal, Happy earnings!❤️*",parse_mode : "Markdown" , disable_web_page_preview: true
});

