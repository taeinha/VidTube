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

video_1 = Video.create(title: "Abstract Streamers", description: "Abstract Streamers are fun!!!", view_count: 100, uploader_id: demouser.id )
video_2 = Video.create(title: "Bubbles in slow motion", description: "Bubbles in slow motion are cool", view_count: 335, uploader_id: demouser.id )
video_3 = Video.create(title: "Candle on a Green Screen", description: "Candle on a Green Screen. Please like and leave a comment!", view_count: 10000, uploader_id: demouser.id )
video_4 = Video.create(title: "Cat hissing at camera", description: "Cats can be scary!", view_count: 500, uploader_id: mochi.id )
video_5 = Video.create(title: "Cat in a busy market", description: "Cats like to relax.", view_count: 30, uploader_id: mochi.id )
video_6 = Video.create(title: "Cat in the sun", description: "Cats are everything!", view_count: 700, uploader_id: mochi.id )
video_7 = Video.create(title: "Cat low angle", description: "Recording cats is fun!", view_count: 10092, uploader_id: mochi.id )
video_8 = Video.create(title: "Handheld street cat", description: "Cool cat on the street", view_count: 60, uploader_id: mochi.id )
video_9 = Video.create(title: "Rocky Mountains Timelapse", description: "Rocky Mountains Timelapse. Please like and leave a comment!", view_count: 675, uploader_id: timelapser.id )
video_10 = Video.create(title: "A timelapse of a city from day to night", description: "A timelapse of a city from day to night. Please like and leave a comment!", view_count: 154, uploader_id: timelapser.id )
video_11 = Video.create(title: "Timelapse of Kuala Lumpur", description: "Timelapse of Kuala Lumpur. Please like and leave a comment!", view_count: 177, uploader_id: timelapser.id )
video_12 = Video.create(title: "Stars Timelapse 1", description: "Stars Timelapse 1. Please like and leave a comment!", view_count: 155, uploader_id: timelapser.id )
video_13 = Video.create(title: "Stars Timelapse 2", description: "Stars Timelapse 2. Please like and leave a comment!", view_count: 0, uploader_id: timelapser.id )