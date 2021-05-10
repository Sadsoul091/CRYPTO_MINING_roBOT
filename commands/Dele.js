/*CMD
  command: Dele
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let M1 = Libs.ResourcesLib.userRes("M1");
let M2 = Libs.ResourcesLib.userRes("M2");
let M3 = Libs.ResourcesLib.userRes("M3");
let M4 = Libs.ResourcesLib.userRes("M4");
let M5 = Libs.ResourcesLib.userRes("M5");
let M6 = Libs.ResourcesLib.userRes("M6");
let M7 = Libs.ResourcesLib.userRes("M7");
let balance = Libs.ResourcesLib.userRes("balance");
balance.add(M1.value())
balance.add(M2.value())
balance.add(M3.value())
balance.add(M4.value())
balance.add(M5.value())
balance.add(M6.value())
balance.add(M7.value())
M1.add(-M1.value())
M2.add(-M2.value())
M3.add(-M3.value())
M4.add(-M4.value())
M5.add(-M5.value())
M6.add(-M6.value())
M7.add(-M7.value())

