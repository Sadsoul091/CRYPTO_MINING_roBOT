/*CMD
  command: /EXCHANGE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💱 exchange
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
Bot.sendMessage("In this section, you can exchange LTC for Gem 💎. \n All Gems you receive will be added to your account. \n\n🔻 Game currency rate: \n▪️ 0.0001 LTC = 1 💎" + "\n\n🔻 Your LTC: " + "\n" + balance.value().toFixed(8) + "\n\n_👇 Enter LTC you want to exchange :_ ")
Bot.runCommand("/exch")
