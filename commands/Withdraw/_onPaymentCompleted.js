/*CMD
  command: /onPaymentCompleted
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var amount = options.amount 
var wallet = options.wallet
var id = options.id






Libs.CoinPayments.apiCall({
  fields: { cmd: "get_withdrawal_info",
            id: id
          },
  onSuccess: 'Result'
          });
