/*CMD
  command: /col
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
let M1 = Libs.ResourcesLib.userRes("M1");
let M2 = Libs.ResourcesLib.userRes("M2");
let M3 = Libs.ResourcesLib.userRes("M3");
let M4 = Libs.ResourcesLib.userRes("M4");
let M5 = Libs.ResourcesLib.userRes("M5");
let M6 = Libs.ResourcesLib.userRes("M6");
let M7 = Libs.ResourcesLib.userRes("M7");
let balance = Libs.ResourcesLib.userRes("balance");
let res = (M1.value()+M2.value()+M3.value()+M4.value()+M5.value()+M6.value()+M7.value()).toFixed(8)
var amount = Number(amount);
Api.answerCallbackQuery({

callback_query_id: request.id,
text: "✅ You Recieved " + res + " LTC ",

show_alert: false
})
Bot.runCommand("Dele")
Bot.runCommand("Miners")


