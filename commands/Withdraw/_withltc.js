/*CMD
  command: /withltc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 0.0000 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*📛 You can withdraw only 1 time in 24 hours\n\n💡 Next Withdraw in "+wait_hours+" Hours and "+wait_minutes+" minutes*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");
var withdraw = Libs.ResourcesLib.userRes("withdraw");
var wallet = User.getProperty("wallet");
var history = User.getProperty("historyw");
var balance = Libs.ResourcesLib.userRes("balance")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
var mini = Bot.getProperty("mini");

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}

if(message < ""+mini+""){
Bot.sendMessage("*❌ Minimum amount to withdraw 0.025 LTC*")
}else{
if(message > balance.value()){
Bot.sendMessage("*🚫 You Can Withdraw Maximum:* "+balance.value().toFixed(6)+" *LTC*")
}else{
if (message >= ""+mini"" && message<=1){
let amo = message 
User.setProperty("amo",amo,"string")
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: message // input your withdrawal amount
,
            currency: "LTC" //currency for withdrawal
,
address: wallet,
           auto_confirm: 1
},
  onSuccess: '/onSuccess',
  onPaymentCompleted: 'onPaymentCompleted'
});
if(history == undefined){

var newh = "-------------------------------------------------------------------------------------\n"+"*✅ Withdrawn Amount :* "+ message+ " *LTC* "+" \n*🕥 DATE* "+time;
User.setProperty("historyw",newh,"string")
}else{
var nwh = "-------------------------------------------------------------------------------------\n"+"*✅ Withdrawn Amount :* "+ message+ " *LTC* "+" \n*🕥 DATE* "+time;
var toal = nwh+history;
User.setProperty("historyw",toal,"string")
}
balance.add(-message)
withdraw.add(+message)
userPayment.add(+message)

}else{
if(history == undefined){

var newh = "-------------------------------------------------------------------------------------\n"+"*✅ Withdrawn Amount :* "+ message+ " *LTC* "+" \n*🕥 DATE* "+time;
User.setProperty("historyw",newh,"string")
}else{
var nwh = "-------------------------------------------------------------------------------------\n"+"*✅ Withdrawn Amount :* "+ message+ " *LTC* "+" \n*🕥 DATE* "+time;
var toal = nwh+history;
User.setProperty("historyw",toal,"string")
}
Bot.sendMessage("✅ Withdrawal Requested\nYour will get your payment within24 hours"+"\n"+"\n"+"\n💳 Transaction Details:\n"+message+" TRX to the wallet\n"+wallet)
balance.add(-message)
withdraw.add(+message)
userPayment.add(+message)
}}
}
