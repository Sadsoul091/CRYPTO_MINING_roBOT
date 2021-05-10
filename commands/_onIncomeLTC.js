/*CMD
  command: /onIncomeLTC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!options){
   // for security we need to check
   // that this command runned only by lib
   // user can not run command with options
   return
}

var wallet = options.address;
var currency = options.currency;
var amount = options.amount;
var amountt = amount*10000

var fiat_amount = options.fiat_amount;
var fiat_currency = options.fiat_coin;

var fee = options.fee;
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
var history = User.getProperty("history"); 
var txn_id = options.txn_id
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
  Api.sendMessage ({chat_id: "Channel username here", text: "*❤️ New Deposit Received ❤️*" + "\n\n🔸 Status: Confirmed" +
    "\n *🔸Amount Deposited: * " +
amount + "* LTC * \n *🔸Name:* " + info + "\n * \n🌐 Transaction ID:  *" + "\n ["+ txn_id + "]" +"(https://tx.botdev.me/LTC/" + txn_id + "\n)" + "\n",parse_mode : "Markdown" , disable_web_page_preview: true
});
var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
var deposit   = Libs.ResourcesLib.userRes("refco");
deposit.add(amountt)
depo.add(amount)
User.setProperty("minertrx",amount ,"text");
Bot.runCommand("minertrx");
var lilo = Bot.getProperty("total");
var total = lilo+amount;
Bot.setProperty("total" , total , "integer");
var referrer = Libs.ReferralLib.currentUser.attractedByUser();
var bonus = amount * 0.1;

if(history == undefined){

var newh = "-------------------------------------------------------------------------------------\n"+"✅Invested Amount : "+ amount+"TRX"+"\n⚕DATE "+time;
User.setProperty("history",newh,"string")
}else{
var nwh = "-------------------------------------------------------------------------------------"+"\n✅Invested Amount : "+ amount+"TRX"+"\n⚕DATE "+time;
var toal = nwh+history;
User.setProperty("history",toal,"string")
}

if(referrer){
  var referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
referrerRes.add(bonus);
  var refcom = Libs.ResourcesLib.anotherUserRes("refcom", referrer.telegramid);
refcom.add(bonus);
Bot.sendMessageToChatWithId(referrer.telegramid,"*➕ Referral Deposit:* "+bonus.toFixed(8)+"*LTC*");
}else{

Bot.sendMessage("Check Payment Channel: @Channel Username");
}
} 
