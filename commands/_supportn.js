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
  aliases: ๐support
CMD*/

let key = Bot.getProperty("ST")
Bot.sendKeyboard("๐ New Ticket,\nBack ๐",""+key+"")
