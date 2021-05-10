/*CMD
  command: /withdrawh
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var his = User.getProperty("historyw")
if(his == undefined){
var go ="*🧾 Withdrawals History*"+ "\n_Here you can find your last 15 pending or paid withdrawals_";
Bot.sendMessage(go)
}else{
Bot.sendMessage("*🧾 Withdrawals History*\n\n"+his)
}
