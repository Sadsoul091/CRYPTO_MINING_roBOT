/*CMD
  command: /Panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin") 
var info = "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")"

if (user.telegramid == ""+id+""){
var key = [[{title:"π GET FULL BOT INFO π",command:"/info"},{title:"π Change Balance",command:"/addb"}],[{title:"π Broadcast",command:"/broad"}],[{title:"π°Check User Balance",command:"/check"},{title:"π Gift Sending",command:"/gift"}],[{title:"π Gem Sending", command:"/ADD"}],[{title:"π Fake Statistic",command:"/fakes"}],[{title:"βοΈ Coinpayments",command:"/keys"}],[{title:"π₯ Demo Deposit",command:"/demodepo"},{title:"π€ Demo Withdraw",command:"/demowith"}],[{title:"Set Minimum redeem β",command:"/mini"},{title:"πΉ Customize Support Text",command:"/editx"}],[{title:"π Edit Welcome Message",command:"/welcot"}],[{title:"β© Refer Bonus",command:"/reff"}],[{title:"β­ Add Channels",command:"/channels"}],
[{title:"π Start Message",command:"/setstart"},{title:"π©βπ» Payment proof channel",command:"/pchannel"}],[{title:"change admin",command:"/adminid"},{title:"π£οΈ Set Refer Link",command:"/link"}]]

Bot.sendInlineKeyboard(key,"*Hey* " +user.first_name+ " \n*Welcome To the admin panel* \n*Warning when using this panel please don't send any other command it may spoil your work*\n\nπ _Coded_ _by_ @no5one5")
}else{
Bot.sendMessageToChatWithId(1036836415,"New User Tried to Log in "+info+"")}




