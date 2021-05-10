/*CMD
  command: ⭕ JOINED ⭕
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

var chan = Bot.getProperty("channel1")
if (stat == "ban") {
  Bot.sendMessage("*You're Ban From Using The Bot ❌*")
} else {
  var channel = ""+chan+""
  var id = user.telegramid
  Api.getChatMember({
    chat_id: channel,
    user_id: id,
    on_result: "/check1"
  })
}

