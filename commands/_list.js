/*CMD
  command: /list
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.answerCallbackQuery({

callback_query_id: request.id,
text: "Developer : @mithi2005 ✅",

show_alert: false
})
var lib = Libs.ReferralLib
var reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
var tgid = user.telegramid
var refcom = Libs.ResourcesLib.userRes("refcom")
var link = Bot.getProperty("link")
var bot = Libs.ReferralLib.currentUser.getRefLink(""+link+"","inv")

var msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}
Bot.sendMessage("Invite Friends Link" + "\n" +bot)
