/*CMD
  command: /ltc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: ➖ withdraw
CMD*/

let wallet = User.getProperty("wallet")
if (wallet == undefined) {
  var button = [[{ title: "💼Set/Change Wallet", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*💡 Your currently set LTC wallet is:* not set\n\nIt will be used for all future withdrawals."
  )
} else {
Bot.runCommand("LTC")
}


