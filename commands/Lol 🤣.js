/*CMD
  command: Lol 🤣
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter code ??😑
  keyboard: 
  aliases: 
CMD*/

if(message == "FREE10" ){
var balance = Libs.ResourcesLib.userRes("money") 
balance.add(10)
Bot.sendMessage("YOU GOT 10 RS IN YOUR BALANCE 🤯") 
}else{
Bot.sendMessage("WRONG CODE😡")
}
