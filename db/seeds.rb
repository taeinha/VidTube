# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Video.destroy_all
User.destroy_all

demouser = User.create(username: "Demo User", email: "demouser@gmail.com", password: "abcdef")
mochi = User.create(username: "Mochi", email: "mochi@gmail.com", password: "123456")
timelapser = User.create(username: "TimeLapser", email: "timelapser@gmail.com", password: "123456")
tae = User.create(username: "Tae Ha", email: "taeinha@gmail.com", password: "123456")

video_1 = Video.create(title: "Abstract Streamers - a fancy abstract 3D background", description: "Abstract Streamers are fun!!! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 100, uploader_id: demouser.id )
video_2 = Video.create(title: "Bubbles in slow motion - MUST WATCH!!", description: "Bubbles in slow motion are cool. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 335, uploader_id: demouser.id )
video_3 = Video.create(title: "Candle on a Green Screen - Random video", description: "Candle on a Green Screen. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 10000, uploader_id: demouser.id )
video_4 = Video.create(title: "Cat hissing at camera - WARNING! [Scary cat]", description: "Cats can be scary! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 500, uploader_id: mochi.id )
video_5 = Video.create(title: "Cat in a busy market - WARNING! [Cute cat]", description: "Cats like to relax. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 30, uploader_id: mochi.id )
video_6 = Video.create(title: "Cat in the sun - Cat in the Wild!", description: "Cats are everything! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 700, uploader_id: mochi.id )
video_7 = Video.create(title: "Cat low angle - Photography lesson #1", description: "Recording cats is fun! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 10092, uploader_id: mochi.id )
video_8 = Video.create(title: "Handheld street cat [amazing kitty!]", description: "Cool cat on the street. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 60, uploader_id: mochi.id )
video_9 = Video.create(title: "Rocky Mountains Timelapse [Record #110-32]", description: "Rocky Mountains Timelapse. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 675, uploader_id: timelapser.id )
video_10 = Video.create(title: "A timelapse of a city from day to night [Record #110-35]", description: "A timelapse of a city from day to night. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 154, uploader_id: timelapser.id )
video_11 = Video.create(title: "Timelapse of Kuala Lumpur [Record #110-20]", description: "Timelapse of Kuala Lumpur. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 177, uploader_id: timelapser.id )
video_12 = Video.create(title: "Stars Timelapse 1 - Space view [Record #110-80]", description: "Stars Timelapse 1. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 155, uploader_id: timelapser.id )
video_13 = Video.create(title: "Stars Timelapse 2 - Space view [Record #110-90]", description: "Stars Timelapse 2. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 0, uploader_id: timelapser.id )