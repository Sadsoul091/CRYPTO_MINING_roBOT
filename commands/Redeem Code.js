/*CMD
  command: Redeem Code
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send the redeem code
  keyboard: 
  aliases: 
CMD*/

var ti = Bot.getProperty(message)
if(message.length < 10){
Bot.sendMessage("*WRONG CODE*")
return
}else
if (!ti) {
  Bot.sendMessage("*Invalid code*")
  return
} else if (ti == "null") {
  Bot.sendMessage("*The code is already redeemed*")
  return
} else var balance = Libs.ResourcesLib.userRes("balance")
Bot.setProperty(message, "null")

balance.add(ti)
Bot.sendMessage(
  "*Congratulations, code successfully redeemed, added to balance: *" +
    ti +
    " BP"
)
return

