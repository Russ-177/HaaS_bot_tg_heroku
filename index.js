const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '861650033:AAGK2ENggwtdneqWa42jFC6Jurh0wBZmtAc';

console.log("Bot has been started...");

const bot = new TelegramBot (TOKEN, {
  polling: {
    interval:300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
});

bot.on ('message', msg => {

   const chatId = msg.chat.id

   if (msg.text === 'HaaS влючает в себя') {
     bot.sendMessage (chatId, 'Работы по аудиту текущей ИТ-инфраструктуры;  Работы по проектированию ИТ-инфраструктуры и подбору оборудования, исходя из требований заказчика; Работы по размещению и внедрению на любой площадке по требованию заказчика; Мониторинг ИТ-инфраструктуры, администрирование, техническую поддержку оборудования и соблюдение SLA;')

   } else if (msg.text === 'Какое оборудование' ) {
     bot.sendMessage (chatId, 'Оборудование АТС и IP-телефонии;  Оборудование КСПД (маршрутизаторы/коммутаторы, сетевые экраны и т.д.);  Мультимедийное оборудование и Digital Signage; SD-WAN как сервис;  Системы видеоконференцсвязи;  Оборудование рабочего места сотрудника (рабочиестанции, ПК, смартфоны и т.д.);  Специальное отраслевое ИТ-оборудование;  Беспроводные сети WiFi;')

   } else if (msg.text === 'Кто мы?' ) {
     bot.sendMessage (chatId,'https://www.youtube.com/watch?v=RV-vj0fLdg4')

   } else if (msg.text === 'Что такое HaaS?' ) {
     bot.sendMessage (chatId,'По модели HaaS оборудование (IT-инфраструктура) предоставляется заказчику как сервис с оплатой в виде рекуррентных платежей на срок от 1 до 5 лет')

   } else if (msg.text === 'Преимущество от HaaS') {
     bot.sendMessage (chatId,'Возможность не выводить средства из оборота;  Регулярные платежи - OPEX;   Возможность точнее прогнозировать затраты;   Любой вендор, любые устройства;    Размещение на любой площадке по требованию; ')

   } else {
     bot.sendMessage (chatId, 'Привет! Я HaaS_bot - Hardware-as-a-Service (телекоммуникационного оборудования). Я расскажу тебе все о сервисе HaaS от ДТК',
      { reply_markup:  {
           keyboard: [
           ['Кто мы?','Что такое HaaS?'],
           ['HaaS влючает в себя','Какое оборудование'],
           ['Преимущество от HaaS']
         ]
       }
     })
   }
 });

// bot.on ('message', msg => {
//    const chatId = msg.chat.id
//    bot.sendMessage (chatId,'Привет! Я HaaS_bot - Hardware-as-a-Service (телекоммуникационного оборудования). Я расскажу тебе все о сервисе HaaS от ДТК', {
//      reply_markup: {
//        inline_keyboard: [
//          [
//            {
//              text:'Кто мы?',
//              url:'https://www.youtube.com/watch?v=RV-vj0fLdg4'
//            }
//          ],
//          [
//            {
//              text: 'Что такое HaaS?',
//              callback_data:'1'
//            },
//            {
//              text: 'Преимущество от HaaS',
//            callback_data:'1'
//          }
//          ]
//        ]
//      }
//    })
//
//    //bot.sendMessage (msg.chat.id,'https://www.youtube.com/watch?v=RV-vj0fLdg4')
// });
