/*CMD
  command: /adminid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Panel
  answer: SEND ADMIN ID
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("✅ Done: Admin Id is\n "+"`"+message+"`");
Bot.setProperty("admin" , message,"integer")

