/*CMD
  command: buy2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("refco")
let m = Libs.ResourcesLib.userRes("M22")
let hire = Libs.ResourcesLib.anotherChatRes("hire", "global")
if(res.value() < 200){
Api.answerCallbackQuery({

callback_query_id: request.id,
text: "👋 No enough balance",

show_alert: false
})
}else{
Api.answerCallbackQuery({

callback_query_id: request.id,
text: "✅ Miner Hired",

show_alert: false
})
m.add(1)
res.add(-200)
hire.add(1)
Bot.runCommand("minerM2")
}
