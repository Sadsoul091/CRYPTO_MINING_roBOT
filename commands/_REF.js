/*CMD
  command: /REF
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 👬invite
CMD*/

if (chat.chat_type != "private") {
  Bot.sendMessage("_Open me in private_")
  return
}

let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let tgid = user.telegramid
let refcom = Libs.ResourcesLib.userRes("refcom")
let bot = Libs.ReferralLib.currentUser.getRefLink("HolderMiningbotV2","inv")
let TRX = refcom.value()
let bonus = Bot.getProperty("bonus")

let msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}

var key = [[{ title: "Get Referral Link", command: "/list"}]]

Bot.sendInlineKeyboard(
  key,
  "Invite your friends and receive " +bonus+ " 💎 as a bonus and 10% from every deposit of your friend. Your income is unlimited!" + "\n\n*▪️ Referrals : * " + reflist.length+ "\n" + "*▪️Your Income :* " + 5*reflist.length + " 💎")

