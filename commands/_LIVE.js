/*CMD
  command: /LIVE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📶 live
CMD*/

                                                                                                         

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
Api.sendPhoto({
photo:"https://t.me/RFGHJKL4/18",
caption:"*📈 Live LTC price:* *" + TRX.toFixed(4) + "* *$*" + "\n\n" + "*🕓 Server Time:*" +"\n`" +time+"`" + "\n\n*🛠 Developer:* @BESTHOLDER",parse_mode : "Markdown" , disable_web_page_preview: true
});
