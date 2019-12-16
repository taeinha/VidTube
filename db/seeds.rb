# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Video.destroy_all
User.destroy_all

require 'open-uri'

demouser = User.create(username: "Demo User", email: "demouser@gmail.com", password: "abcdef")
mochi = User.create(username: "Mochi", email: "mochi@gmail.com", password: "123456")
timelapser = User.create(username: "TimeLapser", email: "timelapser@gmail.com", password: "123456")
tae = User.create(username: "Tae Ha", email: "taeinha@gmail.com", password: "123456")

video_1 = Video.new(title: "Abstract Streamers - a fancy abstract 3D background", description: "Abstract Streamers are fun!!! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 100, uploader_id: demouser.id )
thumbnail_1 = open('https://vidtube-seeds.s3.amazonaws.com/01_Abstract_streamers.jpg')
video_1.thumbnail_file.attach(io: thumbnail_1, filename: '01_Abstract_streamers.jpg')
video_file_1 = open('https://vidtube-seeds.s3.amazonaws.com/test-video.mp4')
video_1.video_file.attach(io: video_file_1, filename: 'test-video.mp4')
video_1.save

video_2 = Video.new(title: "Bubbles in slow motion - MUST WATCH!!", description: "Bubbles in slow motion are cool. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 335, uploader_id: demouser.id )
thumbnail_2 = open('https://vidtube-seeds.s3.amazonaws.com/02_bubbles_slow_motion.jpg')
video_2.thumbnail_file.attach(io: thumbnail_2, filename: '02_bubbles_slow_motion.jpg')
video_file_2 = open('https://vidtube-seeds.s3.amazonaws.com/test-video.mp4')
video_2.video_file.attach(io: video_file_2, filename: 'test-video.mp4')
video_2.save

video_3 = Video.new(title: "Candle on a Green Screen - Random video", description: "Candle on a Green Screen. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 10000, uploader_id: demouser.id )
thumbnail_3 = open('https://vidtube-seeds.s3.amazonaws.com/03_candle_on_green_screen.jpg')
video_3.thumbnail_file.attach(io: thumbnail_3, filename: '03_candle_on_green_screen.jpg')
video_file_3 = open('https://vidtube-seeds.s3.amazonaws.com/test-video.mp4')
video_3.video_file.attach(io: video_file_3, filename: 'test-video.mp4')
video_3.save

video_4 = Video.new(title: "Cat hissing at camera - WARNING! [Scary cat]", description: "Cats can be scary! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 500, uploader_id: mochi.id )
thumbnail_4 = open('https://vidtube-seeds.s3.amazonaws.com/04_cat_hissing_at_camera.jpg')
video_4.thumbnail_file.attach(io: thumbnail_4, filename: '04_cat_hissing_at_camera.jpg')
video_file_4 = open('https://vidtube-seeds.s3.amazonaws.com/test-video.mp4')
video_4.video_file.attach(io: video_file_4, filename: 'test-video.mp4')
video_4.save

# video_5 = Video.new(title: "Cat in a busy market - WARNING! [Cute cat]", description: "Cats like to relax. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 30, uploader_id: mochi.id )
# thumbnail_5 = open('https://vidtube-seeds.s3.amazonaws.com/05_cat_in_a_busy_market.jpg')
# video_5.thumbnail_file.attach(io: thumbnail_5, filename: '05_cat_in_a_busy_market.jpg')
# video_5.save

# video_6 = Video.new(title: "Cat in the sun - Cat in the Wild!", description: "Cats are everything! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 700, uploader_id: mochi.id )
# thumbnail_6 = open('https://vidtube-seeds.s3.amazonaws.com/06_cat_in_the_sun.jpg')
# video_6.thumbnail_file.attach(io: thumbnail_6, filename: '06_cat_in_the_sun.jpg')
# video_6.save

# video_7 = Video.new(title: "Cat low angle - Photography lesson #1", description: "Recording cats is fun! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 10092, uploader_id: mochi.id )
# thumbnail_7 = open('https://vidtube-seeds.s3.amazonaws.com/07_cat_low_angle.jpg')
# video_7.thumbnail_file.attach(io: thumbnail_7, filename: '07_cat_low_angle.jpg')
# video_7.save

# video_8 = Video.new(title: "Handheld street cat [amazing kitty!]", description: "Cool cat on the street. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 60, uploader_id: mochi.id )
# thumbnail_8 = open('https://vidtube-seeds.s3.amazonaws.com/08_handheld_street_cat.jpg')
# video_8.thumbnail_file.attach(io: thumbnail_8, filename: '08_handheld_street_cat.jpg')
# video_8.save

# video_9 = Video.new(title: "Rocky Mountains Timelapse [Record #110-32]", description: "Rocky Mountains Timelapse. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 675, uploader_id: timelapser.id )
# thumbnail_9 = open('https://vidtube-seeds.s3.amazonaws.com/09_rocky_mountains_timelapse.jpg')
# video_9.thumbnail_file.attach(io: thumbnail_9, filename: '09_rocky_mountains_timelapse.jpg')
# video_9.save

# video_10 = Video.new(title: "A timelapse of a city from day to night [Record #110-35]", description: "A timelapse of a city from day to night. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 154, uploader_id: timelapser.id )
# thumbnail_10 = open('https://vidtube-seeds.s3.amazonaws.com/10_timelapse_day_to_night_city.jpg')
# video_10.thumbnail_file.attach(io: thumbnail_10, filename: '10_timelapse_day_to_night_city.jpg')
# video_10.save

# video_11 = Video.new(title: "Timelapse of Kuala Lumpur [Record #110-20]", description: "Timelapse of Kuala Lumpur. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 177, uploader_id: timelapser.id )
# thumbnail_11 = open('https://vidtube-seeds.s3.amazonaws.com/11_timelapse_of_KLCC_Kuala_Lumpur.jpg')
# video_11.thumbnail_file.attach(io: thumbnail_11, filename: '11_timelapse_of_KLCC_Kuala_Lumpur.jpg')
# video_11.save

# video_12 = Video.new(title: "Stars Timelapse 1 - Space view [Record #110-80]", description: "Stars Timelapse 1. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 155, uploader_id: timelapser.id )
# thumbnail_12 = open('https://vidtube-seeds.s3.amazonaws.com/12_stars_timelapse.jpg')
# video_12.thumbnail_file.attach(io: thumbnail_12, filename: '12_stars_timelapse.jpg')
# video_12.save

# video_13 = Video.new(title: "Stars Timelapse 2 - Space view [Record #110-90]", description: "Stars Timelapse 2. Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 0, uploader_id: timelapser.id )
# thumbnail_13 = open('https://vidtube-seeds.s3.amazonaws.com/13_Stars_time_lapse.jpg')
# video_13.thumbnail_file.attach(io: thumbnail_13, filename: '13_Stars_time_lapse.jpg')
# video_13.save