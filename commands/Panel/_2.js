/*CMD
  command: /2
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
  Bot.sendMessage("✅ Done: Your second channel set is\n " + "`" + message + "`")
  Bot.setProperty("channel2", message, "string")
} else {
  Bot.sendMessage("*⛔ You are not admin*")
}

