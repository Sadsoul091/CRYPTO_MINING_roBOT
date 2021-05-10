/*CMD
  command: Miners
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⛏mining
CMD*/

let M1 = Libs.ResourcesLib.userRes("M1");
let M2 = Libs.ResourcesLib.userRes("M2");
let M3 = Libs.ResourcesLib.userRes("M3");
let M4 = Libs.ResourcesLib.userRes("M4");
let M5 = Libs.ResourcesLib.userRes("M5");
let M6 = Libs.ResourcesLib.userRes("M6");
let M7 = Libs.ResourcesLib.userRes("M7");
let res = (M1.value()+M2.value()+M3.value()+M4.value()+M5.value()+M6.value()+M7.value()).toFixed(8)

 let key = [[{title:"   Collect LTC   ",command:"/col"}]]
Bot.sendInlineKeyboard(key,"The machines produced Tron:" + "\n\n*💻 Cloud M1:* " +  M1.value().toFixed(8) + "\n*💻 Cloud M2:* " + M2.value().toFixed(8) + "\n*💻 Cloud M3:* " + M3.value().toFixed(8) + "\n*💻 Cloud M4:* " + M4.value().toFixed(8) + "\n*💻 Cloud M5:* " + M5.value().toFixed(8) + "\n*💻 Cloud M6:* " + M6.value().toFixed(8) + "\n*💻 Cloud M7:* " + M7.value().toFixed(8) + "\n\n" + "*Totally produced:* " +res+ " *LTC* ")

