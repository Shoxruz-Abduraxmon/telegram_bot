const TelegramBot = require('node-telegram-bot-api');
const token = '6304348389:AAGK1ztny5cnTs0_DaGdoC0BBi5UNDb11wE';

const bot = new TelegramBot(token, { polling: true });

bot.on('text', async msg => {

    let full_name = msg.from.first_name;

    try {

        if (msg.text.startsWith('/start')) {

            await bot.sendMessage(msg.chat.id, `Assalomu aleykum  - <b>${full_name}</b> 👋🏻 ` + `- /menu - ni bosing`, {
                parse_mode : `HTML`
            });

          
        }

        // menuni ochish
        else if (msg.text == '/menu') {

            await bot.sendMessage(msg.chat.id, `Меню бота`, {

                reply_markup: {

                    keyboard: [

                        ['⭐️ Картинка', '⭐️ Видео'],
                        [ '⭐️ Геолокация'],
                        ['❌ Закрыть меню']

                    ],
                    resize_keyboard: true

                }

            })

        }
        /// menu - yopish
        else if (msg.text == '❌ Закрыть меню') {

            await bot.sendMessage(msg.chat.id, 'Меню закрыто', {

                reply_markup: {

                    remove_keyboard: true

                }

            })

        }

        // kartinka
        else if (msg.text == '⭐️ Картинка') {

            await bot.sendPhoto(msg.chat.id, 'https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.og.jpg?202308281433', {

                caption: '<b>⭐️ Картинка - macbook pro</b>',
                parse_mode: 'HTML'

            });

        }

        // video 

        else if (msg.text == '⭐️ Видео') {

            await bot.sendVideo(msg.chat.id, 'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/NIHmZbghlilb1qj7b/videoblocks-sequoia-national-park-under-the-fog-mist-clouds_bvm0jz9ur__bb464a8d8e055b1c5356bef76828e5f6__P360.mp4', {

                caption: '<b>⭐️ Видео - fores </b>',
                parse_mode: 'HTML'

            });

        }


        else if(msg.text == '⭐️ Геолокация') {

            const latitudeOfRedSquare = 55.753700;
            const longitudeOfReadSquare = 37.621250;
        
            await bot.sendLocation(msg.chat.id, latitudeOfRedSquare, longitudeOfReadSquare, {
        
                reply_to_message_id: msg.message_id
        
            })
        
        }

    }




    catch (error) {

        console.log(error);

    }

})


