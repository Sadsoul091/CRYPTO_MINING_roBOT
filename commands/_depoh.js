/*CMD
  command: /depoh
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var his = User.getProperty("history")
if(his == undefined){
var go ="*⚙️ Last 20 Active Investments*"+ "\n✨ No investments found";
Bot.sendMessage(go)
}else{
Bot.sendMessage("⚙️ Last 20 Active Investments\n\n"+his)
}
