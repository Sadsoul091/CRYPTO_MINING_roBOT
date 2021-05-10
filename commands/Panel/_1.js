/*CMD
  command: /1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: Send your Channel Name :-
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("admin")
if (user.telegramid == ""+id+"") {
  Bot.sendMessage("✅ Done: Your New Channel Key is\n " + "`" + message + "`")
  Bot.setProperty("channel1", message, "string")
} else {
  Bot.sendMessage("*⛔ You are not admin*")
}

