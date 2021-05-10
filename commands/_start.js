/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var firstname = "user.first_name"
var tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
  tota.add(1)
let start = Bot.getProperty("start")
Bot.sendKeyboard("⭕ JOINED ⭕",""+start+"")

var ref = Bot.getProperty("ref")

function onAttracted(refUser){
// access to Bonus Res of refUser
var res = Libs.ResourcesLib.anotherUserRes("refco", refUser.telegramid);
var bonus = Bot.getProperty("bonus")
  res.add(""+ref+"");  // add 0.05000 bonus for friend
var refchatid= refUser.chatId;
Bot.sendMessageToChatWithId( refchatid,"*Recived* *" +bonus+ "* *💎 From New Referral*");
}

Libs.ReferralLib.currentUser.track({
   onAtractedByUser: onAttracted
});

