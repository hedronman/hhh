import telebot
import os
import sqlite3
from telebot import types
Token = '8126968220:AAFNF_lC2_SN48bk01hUczSZA4g3gVz__V0'


#/start
bot = telebot.TeleBot(Token)
@bot.message_handler(commands = ['start'])
def send_welcome(message):
    bot.reply_to(message,"Привет,напиши что-нибудь что бы увидеть меню.\nЕсли нужна помощь напиши /help")

#/help
@bot.message_handler(commands = ['help'])
def send_welcome(message):
    bot.reply_to(message,"Для связи @perunovvvv222")


#text
@bot.message_handler(func=lambda message: True)
def echo_message(message):
    markup = types.InlineKeyboardMarkup()
    btn = types.InlineKeyboardButton(text = "testbtn", callback_data = "test")
    markup.add(btn)
    btn1 = types.InlineKeyboardButton(text = "Wiki 🌐", url = 'https://ru.wikipedia.org/wiki/')
    markup.add(btn1)
    bot.reply_to(message, message.text,reply_markup = markup)

# обработчик нажатий
@bot.callback_query_handler(func=lambda call: True)
def callback_query(call):
    if call.data == "test":
        bot.send_message(call.from_user.id, "ты нажал на кнопку")



bot.polling()
