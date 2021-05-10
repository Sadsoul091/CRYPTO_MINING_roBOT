/*CMD
  command: /SHOP
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🏪 shop
CMD*/

let M1 = Libs.ResourcesLib.userRes("M11");
let M2 = Libs.ResourcesLib.userRes("M22");
let M3 = Libs.ResourcesLib.userRes("M33");
let M4 = Libs.ResourcesLib.userRes("M44");
let M5 = Libs.ResourcesLib.userRes("M55");
let M6 = Libs.ResourcesLib.userRes("M66");
let M7 = Libs.ResourcesLib.userRes("M77");
var key1 = [[{title:"Buy Cloud Miner 1",command:"buy1"}]]
var key2 = [[{title:"Buy Cloud Miner 2",command:"buy2"}]]
var key3 = [[{title:"Buy Cloud Miner 3",command:"buy3"}]]
var key4 = [[{title:"Buy Cloud Miner 4",command:"buy4"}]]
var key5 = [[{title:"Buy Cloud Miner 5",command:"buy5"}]]
var key6 = [[{title:"Buy Cloud Miner 6",command:"buy6"}]]
var key7 = [[{title:"Buy Cloud Miner 7",command:"buy7"}]]
Bot.sendMessage("*⛏ Mining List*" + "\n\n* You can buy different TRX mining machines here.*")
Bot.sendInlineKeyboard(key1,"*Cloud Miner 1*" + "\nProduce per hour: 0.00001" + "\nYour Cloud: " +M1.value().toFixed() + "\nPrice: 100 💎")
Bot.sendInlineKeyboard(key2,"*Cloud Miner 2*" + "\nProduce per hour: 0.00002" + "\nYour Cloud: " +M2.value().toFixed() + "\nPrice: 200 💎")
Bot.sendInlineKeyboard(key3,"*Cloud Miner 3*" + "\nProduce per hour: 0.00003" + "\nYour Cloud: " +M3.value().toFixed() + "\nPrice: 300 💎")
Bot.sendInlineKeyboard(key4,"*Cloud Miner 4*" + "\nProduce per hour: 0.00004" + "\nYour Cloud: " +M4.value().toFixed() + "\nPrice: 400 💎")
Bot.sendInlineKeyboard(key5,"*Cloud Miner 5*" + "\nProduce per hour: 0.00005" + "\nYour Cloud: " +M5.value().toFixed() + "\nPrice: 500 💎")
Bot.sendInlineKeyboard(key6,"*Cloud Miner 6*" + "\nProduce per hour: 0.00006" + "\nYour Cloud: " +M6.value().toFixed() + "\nPrice: 600 💎")
Bot.sendInlineKeyboard(key7,"*Cloud Miner 7*" + "\nProduce per hour: 0.00007" + "\nYour Cloud: " +M7.value().toFixed() + "\nPrice: 700 💎")
