/*CMD
  command: /email
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer:  send the message
  keyboard: 
  aliases: 
CMD*/

function GACode(){
  
  // send Email
  MailApp.sendEmail({
    to: "wafiismail27@gmail.com",
    subject: "hello from bot " + bot.name,
    htmlBody: "<h1>Hello!</h1>How are you?<br>" +
        "We have message to bot: " + message
  });

  Bot.sendMessage("Sent\n\nmessage has been sent to wafiismail27@gmail.com") 

}

Libs.GoogleApp.run({
  func: GACode,
  onRun: "onRun",
  // email: "test@example.com" // email for errors
  // debug: true // default false
});
