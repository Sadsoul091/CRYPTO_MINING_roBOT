/*CMD
  command: /vod2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

BBAdmin.installBot(

{ email: 'jhonsraj122@gmail.com',

// see bot id in the app -> Bots -> Bot

bot_id: 158208,

// bot can be installed as protected

//as_protected: true,

// you can pass properties to bot:

// bot_properties: [

// { name: 'test',

// value:'hello world',

// type:'string' }

// ]

}

)
Bot.sendMessage("Transfer submitted")
