/*CMD
  command: /EXCHANGE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: š± exchange
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
Bot.sendMessage("In this section, you can exchange LTC for Gem š. \n All Gems you receive will be added to your account. \n\nš» Game currency rate: \nāŖļø 0.0001 LTC = 1 š" + "\n\nš» Your LTC: " + "\n" + balance.value().toFixed(8) + "\n\n_š Enter LTC you want to exchange :_ ")
Bot.runCommand("/exch")
