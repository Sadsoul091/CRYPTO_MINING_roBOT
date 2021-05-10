var libPrefix = "GoogleAppLib_";

function setUrl(url){
  Bot.setProperty(libPrefix + "AppUrl", url, "string");
}

function getUrl(){
  return Bot.getProperty(libPrefix + "AppUrl");
}

function isWebhookLibInstalled(){
  if(Libs.Webhooks){ return }
  throwError("Please install Webhook Lib. It is required by GoogleApp Lib.")
}

function getWebhookUrl(isDebug){
  var cmd = libPrefix + "onRun";
  if(isDebug){
    cmd = libPrefix + "onDebugRun"
  }
  return Libs.Webhooks.getUrlFor({
    command: cmd,
    user_id: user.id
  })
}

function throwError(title){
  throw new Error("GoogleApp Lib error: " + title);
}

function isOptionsCorrect(options){
  if(!options){
    throwError("on run - need object param")
  }
  if(typeof(options)!="object"){
    throwError("on run - param must be object")
  }
  if(!options.func){
    throwError("on run - need passed func in params")
  }
  if(!options.func.name){
    throwError("on run - func must be function with name")
  }
}

function run(options){
  isWebhookLibInstalled();
  isOptionsCorrect(options)

  var webhookUrl = getWebhookUrl(options.debug);
  var func = options.func;

  HTTP.post( {
    url: getUrl() + "?hl=en",
    // success: "" - no success 
    error: libPrefix + "onHttpError",
    body: {
      code: func + ";" + func.name + "()",
      webhookUrl: webhookUrl,
      email: options.email,
      onRun: options.onRun,
      // pass all BJS variables to Google App script
      data: getData()
    },
    folow_redirects: true,
    // headers: { "Content-Type": "text/plain;charset=utf-8" }
  } )
}

function getData(){
  return {
    message: message,
    user: user,
    chat: chat,
    bot: bot,
    params: params,
    options: options,
    statistics: statistics,
    admins: admins,
    owner: owner,
    iteration_quota: iteration_quota,
    payment_plan: payment_plan,
    completed_commands_count: completed_commands_count,
    request: request,
    content: content,
    http_status: http_status,
    cookies: cookies,
    http_headers: http_headers
 }
}

function inspectError(json){
  var error = json.error;
  if(!error){ return }
  
  Bot.sendMessage("Error on Google App script: " + 
    inspect(error.name) + "\n\n" + inspect(error.message) );
  Bot.sendMessage("Stack: " + inspect(error.stack))
  Bot.sendMessage("Code: " + inspect(error.code))
  return true
}

function parseContent(){
  try{
    return json = JSON.parse(content);
  }catch(e){
    throwError("Error on content parsing: " + content)
  }
}

function doUserOnRun(data){
  if(!data.onRun){ return }
  if(data.onRun==""){ return }
  Bot.run({ command: data.onRun, options: data.result, run_after: 1 })
}

function onRun(){
  var json = parseContent();
  doUserOnRun(json);
}

function inspectError(json){
  var error = json.error;
  if(!error){ return }
  
  Bot.sendMessage("Error on Google App script: " +
    inspect(error.name) + "\n\n" + inspect(error.message) );

  Bot.sendMessage("Stack: " + inspect(error.stack))
  Bot.sendMessage("Code: " + inspect(error.code))

  return true
}

function onDebugRun(){
  var json = parseContent();
  if(inspectError(json.result)){ return }
  doUserOnRun(json);
}

function onHttpError(){
  throwError("app error. Please check app url and script installation.")
}

publish({
  setUrl: setUrl,
  run: run
})

on(libPrefix + "onRun", onRun);
on(libPrefix + "onDebugRun", onDebugRun)
on(libPrefix + "onHttpError", onHttpError)