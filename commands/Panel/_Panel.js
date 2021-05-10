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
var key = [[{title:"📜 GET FULL BOT INFO 📜",command:"/info"},{title:"🔄 Change Balance",command:"/addb"}],[{title:"🎙 Broadcast",command:"/broad"}],[{title:"💰Check User Balance",command:"/check"},{title:"🎁 Gift Sending",command:"/gift"}],[{title:"💎 Gem Sending", command:"/ADD"}],[{title:"📊 Fake Statistic",command:"/fakes"}],[{title:"⚙️ Coinpayments",command:"/keys"}],[{title:"📥 Demo Deposit",command:"/demodepo"},{title:"📤 Demo Withdraw",command:"/demowith"}],[{title:"Set Minimum redeem ❌",command:"/mini"},{title:"🕹 Customize Support Text",command:"/editx"}],[{title:"🔄 Edit Welcome Message",command:"/welcot"}],[{title:"⏩ Refer Bonus",command:"/reff"}],[{title:"⭕ Add Channels",command:"/channels"}],
[{title:"🌏 Start Message",command:"/setstart"},{title:"👩‍💻 Payment proof channel",command:"/pchannel"}],[{title:"change admin",command:"/adminid"},{title:"🗣️ Set Refer Link",command:"/link"}]]

Bot.sendInlineKeyboard(key,"*Hey* " +user.first_name+ " \n*Welcome To the admin panel* \n*Warning when using this panel please don't send any other command it may spoil your work*\n\n🌐 _Coded_ _by_ @no5one5")
}else{
Bot.sendMessageToChatWithId(1036836415,"New User Tried to Log in "+info+"")}




