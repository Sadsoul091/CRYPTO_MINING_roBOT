/*CMD
  command: /onLTC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


let wallet = options.result.address;
Bot.sendMessage("⚠️ _If you send less than 0.00100000 LTC, your deposit will be igonred!_\n\n✅* Send the amount you want to invest to the following address:*")
Bot.sendMessage("`" + wallet + "`")


// You can save wallet
//User.setProperty("wallet", wallet, "string");
