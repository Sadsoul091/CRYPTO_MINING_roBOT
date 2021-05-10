/*CMD
  command: /setwallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💼 set wallet
CMD*/

let wallet = User.getProperty("wallet")
if(wallet==undefined){
var button = [
[{title : "💼 Set / Change Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*Settings*" + "\n\n_The system will automatically save your Tron address forever in subsequent transactions until you want to change it again_" + "\n\n*Your Tron wallet:*" + "\n" + " `not set`" + "\n\nWhich wallet do you want to set?");
}else{
var button = [
[{title : "✏️ Change Tron Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*Settings*" + "\n\n_The system will automatically save your Tron address forever in subsequent transactions until you want to change it again_" + "\n\n*Your Tron wallet:*" + "\n" + wallet+ "\n\nWhich wallet do you want to set?");
}
