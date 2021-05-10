/*CMD
  command: SetValue
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send me a value for
 your code, Which the users will receive after they redeem it
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var tt = options.myData
Bot.sendMessage("Value for the code: " + tt + " has been set")
Bot.setProperty(tt, message,"integer")

