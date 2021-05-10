/*CMD
  command: /info
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var channel1 = Bot.getProperty("channel1")
var channel2 = Bot.getProperty("channel2")
var mini     = Bot.getProperty("mini")
var Prkey    = Bot.getProperty("Prkey")
var Pukey    = Bot.getProperty("Pukey")
var Welco    = Bot.getProperty("WELCO")
var ref      = Bot.getProperty("ref")
var start    = Bot.getProperty("start")
var st       = Bot.getProperty("ST")
var link     = Bot.getProperty("link")
var pchannel = Bot.getProperty("pchannel")
var msg = "Hello "+user.first_name+"\n\n1 st Join Verification Channel:"+channel1+"\n\n2nd Join Verification Channel:"+channel2+"\n\nPaymentProof Channel :- "+pchannel+"\n\nBot link:"+link+"\n\nMinimum Redeem:"+mini+"\n\nRefer Bonus:"+ref+"\n\nCoinPayments Public Key:"+Pukey+"\n\nCoinpayments Private Key:"+Prkey+"\n\nWelcome Text:"+Welco+"\n\nStart Message:"+start+"\n\nSuppport Text:"+st+"\n\n😎 Coded By : @mithi2005 😎"
Bot.sendMessage(msg)




