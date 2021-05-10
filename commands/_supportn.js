/*CMD
  command: /supportn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 📞support
CMD*/

let key = Bot.getProperty("ST")
Bot.sendKeyboard("📍 New Ticket,\nBack 🔙",""+key+"")
