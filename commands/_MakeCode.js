/*CMD
  command: /MakeCode
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send me any 10 digits code which you want to set as redeem codes for users

  keyboard: 
  aliases: 
CMD*/

var options = { myData: message }
if (message.length < 10) {
  Bot.sendMessage("*WRONG CODE*")
  return
} else Bot.run({ command: "SetValue", options })
