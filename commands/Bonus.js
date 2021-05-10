/*CMD
  command: Bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🎰daily bonus
CMD*/

function canRun(){
  var last_run_at5 = User.getProperty("last_run_at5");
  if(!last_run_at5){ return true }
  
  var minutes = (Date.now() - last_run_at5) /1000/60;
  
  var minutes_in_day = 24*60
  var next = (minutes_in_day - minutes)
var wait_hours=Math.floor( next /3600)
next-= wait_hours * 60
var wait_minutes=Math.floor(next)
var seconds= Math.floor((next - wait_minutes)*60)
  if(minutes < minutes_in_day){
   Bot.sendMessage("*📛 Sorry , you have received your bonus today.*" + "\n\n*👋 You can receive your next bonus after:*" + "\n*"+wait_minutes+"* *minutes and* *" +seconds+ "* *seconds*");
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at5", Date.now(), "integer");

let d=Math.random(600,200)
let am=d/0.1

//Bot.sendMessage(" *You Received:* "+am.toFixed(8)+" TRX ")

let res = Libs.ResourcesLib.userRes("refco");
res.add (35);
Bot.sendMessage  ( "*🎰 Today You Received * " + "\n\n" + "*35 Gems 💎*" + "\n\n*⚜️ Come back tomorrow and try again.This Is free Bonus.*")
