/*CMD
  command: joined2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

var chan2 = Bot.getProperty("channel2")
if (stat == "ban") {
  Bot.sendMessage("*You're Ban From Using The Bot ❌*")
} else {
  var channel = ""+chan2+""
  var id = user.telegramid
  Api.getChatMember({
    chat_id: channel,
    user_id: id,
    on_result: "/check2"
  })
}

