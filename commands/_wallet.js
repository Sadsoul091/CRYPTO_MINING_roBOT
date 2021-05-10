/*CMD
  command: /wallet
  help: 
  need_reply: false
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
Bot.sendMessage("_🔻 Input Tron wallet for paying out:_")
Bot.runCommand("wallet")
