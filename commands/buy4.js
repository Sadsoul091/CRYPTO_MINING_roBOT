/*CMD
  command: buy4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("refco")
let m = Libs.ResourcesLib.userRes("M44")
let hire = Libs.ResourcesLib.anotherChatRes("hire", "global")
if(res.value() < 400){
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
res.add(-400)
hire.add(1)
Bot.runCommand("minerM4")
}
