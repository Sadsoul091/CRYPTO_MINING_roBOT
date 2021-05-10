/*CMD
  command: /check1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status


var chan = Bot.getProperty("channel1")
var channel2 = Bot.getProperty("channel2")
if (channel2 == undefined) {
  if (user=="member" || user =="administrator" || user=="creator"){
Bot.runCommand("/main")}
if (user=="left"){
Bot.sendMessage("*❌ Must join all channel*")}

}else{
Bot.runCommand("joined2")}


