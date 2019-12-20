# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Like.destroy_all
Comment.destroy_all
Video.destroy_all
User.destroy_all

require 'open-uri'

mochi = User.create(username: "Mochi Pochi", email: "mochi@gmail.com", password: "123456")
timelapser = User.create(username: "Time Lapser 23", email: "timelapser@gmail.com", password: "123456")
catvids = User.create(username: "Daily Dose of Cats", email: "dailycats@gmail.com", password: "123456")
tae = User.create(username: "Tae Ha", email: "taeha@gmail.com", password: "123456")
demouser = User.create(username: "Demo User", email: "demouser@gmail.com", password: "abcdef")

video_1 = Video.new(title: "Mochi loves strings! Episode 1", description: "Mochi loves strings! Please like and leave a comment! Subscriptions coming soon.", view_count: 100, uploader_id: mochi.id )
thumbnail_1 = open('https://vidtube-seeds.s3.amazonaws.com/01_Mochi_loves_strings.png')
video_1.thumbnail_file.attach(io: thumbnail_1, filename: '01_Mochi_loves_strings.png')
video_file_1 = open('https://vidtube-seeds.s3.amazonaws.com/01_Mochi_loves_strings.mp4')
video_1.video_file.attach(io: video_file_1, filename: '01_Mochi_loves_strings.mp4')
video_1.save

comment_1a = Comment.create(user_id: mochi.id, video_id: video_1.id, body: "Sometimes there isn't a good answer. No matter how you try to rationalize the outcome, it doesn't make sense. And instead of an answer, you are simply left with a question. Why?")
comment_1b = Comment.create(user_id: tae.id, video_id: video_1.id, body: "It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.")
comment_1c = Comment.create(user_id: catvids.id, video_id: video_1.id, body: "It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it.")
comment_1d = Comment.create(user_id: timelapser.id, video_id: video_1.id, body: "Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.")
comment_1e = Comment.create(user_id: demouser.id, video_id: video_1.id, body: "I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!")
comment_1f = Comment.create(user_id: tae.id, video_id: video_1.id, body: "It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it.")
comment_1g = Comment.create(user_id: catvids.id, video_id: video_1.id, body: "The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this moment she saw the irony of trying to fix the machine with violence.")
comment_1h = Comment.create(user_id: tae.id, video_id: video_1.id, body: "Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.")
comment_1i = Comment.create(user_id: mochi.id, video_id: video_1.id, body: "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.")
comment_1j = Comment.create(user_id: demouser.id, video_id: video_1.id, body: "There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.")


video_2 = Video.new(title: "Mochi thinks she is hiding - Episode 2", description: "Come watch a video of Mochi the cat! Please like and leave a comment!", view_count: 335, uploader_id: mochi.id )
thumbnail_2 = open('https://vidtube-seeds.s3.amazonaws.com/02_Mochi_hiding.jpg')
video_2.thumbnail_file.attach(io: thumbnail_2, filename: '02_Mochi_hiding.jpg')
video_file_2 = open('https://vidtube-seeds.s3.amazonaws.com/02_Mochi_hiding.mp4')
video_2.video_file.attach(io: video_file_2, filename: '02_Mochi_hiding.mp4')
video_2.save

comment_2a = Comment.create(user_id: mochi.id, video_id: video_2.id, body: "Sometimes there isn't a good answer. No matter how you try to rationalize the outcome, it doesn't make sense. And instead of an answer, you are simply left with a question. Why?")
comment_2b = Comment.create(user_id: tae.id, video_id: video_2.id, body: "It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.")
comment_2c = Comment.create(user_id: catvids.id, video_id: video_2.id, body: "It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it.")
comment_2d = Comment.create(user_id: timelapser.id, video_id: video_2.id, body: "Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.")
comment_2e = Comment.create(user_id: demouser.id, video_id: video_2.id, body: "I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!")
comment_2f = Comment.create(user_id: tae.id, video_id: video_2.id, body: "It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it.")
comment_2g = Comment.create(user_id: catvids.id, video_id: video_2.id, body: "The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this moment she saw the irony of trying to fix the machine with violence.")
comment_2h = Comment.create(user_id: tae.id, video_id: video_2.id, body: "Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.")
comment_2i = Comment.create(user_id: mochi.id, video_id: video_2.id, body: "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.")
comment_2j = Comment.create(user_id: demouser.id, video_id: video_2.id, body: "There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.")

video_3 = Video.new(title: "Mochi with a lion haircut - Episode 3", description: "Come watch Mochi with a lion haircut. Please like and leave a comment!", view_count: 600, uploader_id: mochi.id )
thumbnail_3 = open('https://vidtube-seeds.s3.amazonaws.com/03_Mochi_lion_haircut.jpg')
video_3.thumbnail_file.attach(io: thumbnail_3, filename: '03_candle_on_green_screen.jpg')
video_file_3 = open('https://vidtube-seeds.s3.amazonaws.com/03_Mochi_lion_haircut.mp4')
video_3.video_file.attach(io: video_file_3, filename: 'test-video.mp4')
video_3.save

comment_3a = Comment.create(user_id: mochi.id, video_id: video_3.id, body: "Sometimes there isn't a good answer. No matter how you try to rationalize the outcome, it doesn't make sense. And instead of an answer, you are simply left with a question. Why?")
comment_3b = Comment.create(user_id: tae.id, video_id: video_3.id, body: "It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.")
comment_3c = Comment.create(user_id: catvids.id, video_id: video_3.id, body: "It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it.")
comment_3d = Comment.create(user_id: timelapser.id, video_id: video_3.id, body: "Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.")
comment_3e = Comment.create(user_id: demouser.id, video_id: video_3.id, body: "I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!")
comment_3f = Comment.create(user_id: tae.id, video_id: video_3.id, body: "It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it.")
comment_3g = Comment.create(user_id: catvids.id, video_id: video_3.id, body: "The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this moment she saw the irony of trying to fix the machine with violence.")
comment_3h = Comment.create(user_id: tae.id, video_id: video_3.id, body: "Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.")
comment_3i = Comment.create(user_id: mochi.id, video_id: video_3.id, body: "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.")
comment_3j = Comment.create(user_id: demouser.id, video_id: video_3.id, body: "There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.")

video_4 = Video.new(title: "Rocky Mountains -- Timelapse Episode 1", description: "Come watch a cool video of a timelapse of a rocky mountain! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 30, uploader_id: timelapser.id )
thumbnail_4 = open('https://vidtube-seeds.s3.amazonaws.com/04_rocky_mountains_timelapse.jpg')
video_4.thumbnail_file.attach(io: thumbnail_4, filename: '04_rocky_mountains_timelapse.jpg')
video_file_4 = open('https://vidtube-seeds.s3.amazonaws.com/04_rocky_mountains_timelapse.mp4')
video_4.video_file.attach(io: video_file_4, filename: '04_rocky_mountains_timelapse.mp4')
video_4.save

comment_4a = Comment.create(user_id: mochi.id, video_id: video_4.id, body: "Sometimes there isn't a good answer. No matter how you try to rationalize the outcome, it doesn't make sense. And instead of an answer, you are simply left with a question. Why?")
comment_4b = Comment.create(user_id: tae.id, video_id: video_4.id, body: "It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.")
comment_4c = Comment.create(user_id: catvids.id, video_id: video_4.id, body: "It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it.")
comment_4d = Comment.create(user_id: timelapser.id, video_id: video_4.id, body: "Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.")
comment_4e = Comment.create(user_id: demouser.id, video_id: video_4.id, body: "I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!")
comment_4f = Comment.create(user_id: tae.id, video_id: video_4.id, body: "It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it.")
comment_4g = Comment.create(user_id: catvids.id, video_id: video_4.id, body: "The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this moment she saw the irony of trying to fix the machine with violence.")
comment_4h = Comment.create(user_id: tae.id, video_id: video_4.id, body: "Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.")
comment_4i = Comment.create(user_id: mochi.id, video_id: video_4.id, body: "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.")
comment_4j = Comment.create(user_id: demouser.id, video_id: video_4.id, body: "There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.")

video_5 = Video.new(title: "Day to Night City -- Timelapse Episode 2", description: "Come watch a cool video of a timelapse of a city from day to night! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 44, uploader_id: timelapser.id )
thumbnail_5 = open('https://vidtube-seeds.s3.amazonaws.com/05_timelapse_day_to_night_city.jpg')
video_5.thumbnail_file.attach(io: thumbnail_5, filename: '05_timelapse_day_to_night_city.jpg')
video_file_5 = open('https://vidtube-seeds.s3.amazonaws.com/05_timelapse_day_to_night_city.mp4')
video_5.video_file.attach(io: video_file_5, filename: '05_timelapse_day_to_night_city.mp4')
video_5.save

comment_5a = Comment.create(user_id: mochi.id, video_id: video_5.id, body: "Sometimes there isn't a good answer. No matter how you try to rationalize the outcome, it doesn't make sense. And instead of an answer, you are simply left with a question. Why?")
comment_5b = Comment.create(user_id: tae.id, video_id: video_5.id, body: "It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.")
comment_5c = Comment.create(user_id: catvids.id, video_id: video_5.id, body: "It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it.")
comment_5d = Comment.create(user_id: timelapser.id, video_id: video_5.id, body: "Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.")
comment_5e = Comment.create(user_id: demouser.id, video_id: video_5.id, body: "I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!")
comment_5f = Comment.create(user_id: tae.id, video_id: video_5.id, body: "It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it.")
comment_5g = Comment.create(user_id: catvids.id, video_id: video_5.id, body: "The computer wouldn't start. She banged on the side and tried again. Nothing. She lifted it up and dropped it to the table. Still nothing. She banged her closed fist against the top. It was at this moment she saw the irony of trying to fix the machine with violence.")
comment_5h = Comment.create(user_id: tae.id, video_id: video_5.id, body: "Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.")
comment_5i = Comment.create(user_id: mochi.id, video_id: video_5.id, body: "The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.")
comment_5j = Comment.create(user_id: demouser.id, video_id: video_5.id, body: "There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.")

video_6 = Video.new(title: "KLCC Kuala Lumpur -- Timelapse Episode 3", description: "Come watch a cool video of a timelapse of Kuala Lumpur! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 501, uploader_id: timelapser.id )
thumbnail_6 = open('https://vidtube-seeds.s3.amazonaws.com/06_timelapse_of_KLCC_Kuala_Lumpur.jpg')
video_6.thumbnail_file.attach(io: thumbnail_6, filename: '06_timelapse_of_KLCC_Kuala_Lumpur.jpg')
video_file_6 = open('https://vidtube-seeds.s3.amazonaws.com/06_timelapse_of_KLCC_Kuala_Lumpur.mp4')
video_6.video_file.attach(io: video_file_6, filename: '06_timelapse_of_KLCC_Kuala_Lumpur.mp4')
video_6.save

video_7 = Video.new(title: "Stars and the galaxy beyond -- Timelapse Episode 4", description: "Come watch a cool video of a timelapse of stars and space! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 30, uploader_id: timelapser.id )
thumbnail_7 = open('https://vidtube-seeds.s3.amazonaws.com/07_Stars_time_lapse.jpg')
video_7.thumbnail_file.attach(io: thumbnail_7, filename: '07_Stars_time_lapse.jpg')
video_file_7 = open('https://vidtube-seeds.s3.amazonaws.com/07_Stars_time_lapse.mp4')
video_7.video_file.attach(io: video_file_7, filename: '07_Stars_time_lapse.mp4')
video_7.save

video_8 = Video.new(title: "Another Stars and Space video -- Timelapse Episode 5", description: "Come watch a cool video of a timelapse of stars and space! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 70, uploader_id: timelapser.id )
thumbnail_8 = open('https://vidtube-seeds.s3.amazonaws.com/08_stars_timelapse.jpg')
video_8.thumbnail_file.attach(io: thumbnail_8, filename: '08_stars_timelapse.jpg')
video_file_8 = open('https://vidtube-seeds.s3.amazonaws.com/08_stars_timelapse.mp4')
video_8.video_file.attach(io: video_file_8, filename: '08_stars_timelapse.mp4')
video_8.save

video_9 = Video.new(title: "A Cat in a Busy Market", description: "Come watch a video of a calm, yet cool cat in a busy market! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 900, uploader_id: catvids.id )
thumbnail_9 = open('https://vidtube-seeds.s3.amazonaws.com/09_cat_in_a_busy_market.jpg')
video_9.thumbnail_file.attach(io: thumbnail_9, filename: '09_cat_in_a_busy_market.jpg')
video_file_9 = open('https://vidtube-seeds.s3.amazonaws.com/09_cat_in_a_busy_market.mp4')
video_9.video_file.attach(io: video_file_9, filename: '09_cat_in_a_busy_market.mp4')
video_9.save

video_10 = Video.new(title: "A Cat from a low angle -- Photography lessons", description: "Come watch a video of a cool cat! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 10, uploader_id: catvids.id )
thumbnail_10 = open('https://vidtube-seeds.s3.amazonaws.com/10_cat_low_angle.jpg')
video_10.thumbnail_file.attach(io: thumbnail_10, filename: '10_cat_low_angle.jpg')
video_file_10 = open('https://vidtube-seeds.s3.amazonaws.com/10_cat_low_angle.mp4')
video_10.video_file.attach(io: video_file_10, filename: '10_cat_low_angle.mp4')
video_10.save

video_11 = Video.new(title: "A Cat hissing at a camera! Warning!", description: "Come watch a scary video of a scary cat! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 30, uploader_id: catvids.id )
thumbnail_11 = open('https://vidtube-seeds.s3.amazonaws.com/11_cat_hissing_at_camera.jpg')
video_11.thumbnail_file.attach(io: thumbnail_11, filename: '11_cat_hissing_at_camera.jpg')
video_file_11 = open('https://vidtube-seeds.s3.amazonaws.com/11_cat_hissing_at_camera.mp4')
video_11.video_file.attach(io: video_file_11, filename: '11_cat_hissing_at_camera.mp4')
video_11.save

video_12 = Video.new(title: "A handheld street cat - Come watch", description: "Come watch a cool video of a cool cat! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 100, uploader_id: catvids.id )
thumbnail_12 = open('https://vidtube-seeds.s3.amazonaws.com/12_handheld_street_cat.jpg')
video_12.thumbnail_file.attach(io: thumbnail_12, filename: '12_handheld_street_cat.jpg')
video_file_12 = open('https://vidtube-seeds.s3.amazonaws.com/12_handheld_street_cat.mp4')
video_12.video_file.attach(io: video_file_12, filename: '12_handheld_street_cat.mp4')
video_12.save

video_13 = Video.new(title: "A sample video of a bunny in the woods", description: "Come watch the video presented with HTML 5! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 300, uploader_id: tae.id )
thumbnail_13 = open('https://vidtube-seeds.s3.amazonaws.com/13_sample_vid_of_bunny_in_woods.jpg')
video_13.thumbnail_file.attach(io: thumbnail_13, filename: '13_sample_vid_of_bunny_in_woods.jpg')
video_file_13 = open('https://vidtube-seeds.s3.amazonaws.com/13_sample_vid_of_bunny_in_woods.mp4')
video_13.video_file.attach(io: video_file_13, filename: '13_sample_vid_of_bunny_in_woods.mp4')
video_13.save

video_14 = Video.new(title: "A Macro Shot of a Pool of Fish!", description: "Come watch a macro view of a pool of fish in water! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 80, uploader_id: tae.id )
thumbnail_14 = open('https://vidtube-seeds.s3.amazonaws.com/14_Macro_Shot_of_Fish_in_Water.jpg')
video_14.thumbnail_file.attach(io: thumbnail_14, filename: '14_Macro_Shot_of_Fish_in_Water.jpg')
video_file_14 = open('https://vidtube-seeds.s3.amazonaws.com/14_Macro_Shot_of_Fish_in_Water.mp4')
video_14.video_file.attach(io: video_file_14, filename: '14_Macro_Shot_of_Fish_in_Water.mp4')
video_14.save

video_15 = Video.new(title: "A Great view of Fish on the Sea Bottom", description: "Come watch a great view of Fish on the sea floor! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 77, uploader_id: tae.id )
thumbnail_15 = open('https://vidtube-seeds.s3.amazonaws.com/15_Fish_on_the_Sea_Bottom.jpg')
video_15.thumbnail_file.attach(io: thumbnail_15, filename: '15_Fish_on_the_Sea_Bottom.jpg')
video_file_15 = open('https://vidtube-seeds.s3.amazonaws.com/15_Fish_on_the_Sea_Bottom.mp4')
video_15.video_file.attach(io: video_file_15, filename: '15_Fish_on_the_Sea_Bottom.mp4')
video_15.save

video_16 = Video.new(title: "Motocross racers -- MUST WATCH!", description: "Come watch a cool video of motocross racers! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 14, uploader_id: tae.id )
thumbnail_16 = open('https://vidtube-seeds.s3.amazonaws.com/16_Motocross_racers.jpg')
video_16.thumbnail_file.attach(io: thumbnail_16, filename: '16_Motocross_racers.jpg')
video_file_16 = open('https://vidtube-seeds.s3.amazonaws.com/16_Motocross_racers.mp4')
video_16.video_file.attach(io: video_file_16, filename: '16_Motocross_racers.mp4')
video_16.save

video_17 = Video.new(title: "Surfers on giant waves!", description: "Come and watch a video of amazing surfers on great waves! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 51, uploader_id: demouser.id )
thumbnail_17 = open('https://vidtube-seeds.s3.amazonaws.com/17_surfer_on_wave.jpg')
video_17.thumbnail_file.attach(io: thumbnail_17, filename: '17_surfer_on_wave.jpg')
video_file_17 = open('https://vidtube-seeds.s3.amazonaws.com/17_surfer_on_wave.mp4')
video_17.video_file.attach(io: video_file_17, filename: '17_surfer_on_wave.mp4')
video_17.save

video_18 = Video.new(title: "Refinery sparks in slow motion!", description: "Come watch an amazing video of refinery sparks! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 88, uploader_id: demouser.id )
thumbnail_18 = open('https://vidtube-seeds.s3.amazonaws.com/18_refinery_sparks.jpg')
video_18.thumbnail_file.attach(io: thumbnail_18, filename: '18_refinery_sparks.jpg')
video_file_18 = open('https://vidtube-seeds.s3.amazonaws.com/18_refinery_sparks.mp4')
video_18.video_file.attach(io: video_file_18, filename: '18_refinery_sparks.mp4')
video_18.save

video_19 = Video.new(title: "Purple light leak - amazing background effects!", description: "Come watch an amazing video of great 3d effects! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 99, uploader_id: demouser.id )
thumbnail_19 = open('https://vidtube-seeds.s3.amazonaws.com/19_purple_light_leak.jpg')
video_19.thumbnail_file.attach(io: thumbnail_19, filename: '19_purple_light_leak.jpg')
video_file_19 = open('https://vidtube-seeds.s3.amazonaws.com/19_purple_light_leak.mp4')
video_19.video_file.attach(io: video_file_19, filename: '19_purple_light_leak.mp4')
video_19.save

video_20 = Video.new(title: "Some random countdown timer! And its pink", description: "Come watch a video of a random pink countdown timer! Please like and leave a comment! Sample video sourced from https://www.videvo.net/", view_count: 142, uploader_id: demouser.id )
thumbnail_20 = open('https://vidtube-seeds.s3.amazonaws.com/20_pink_countdown_timer.jpg')
video_20.thumbnail_file.attach(io: thumbnail_20, filename: '20_pink_countdown_timer.jpg')
video_file_20 = open('https://vidtube-seeds.s3.amazonaws.com/20_pink_countdown_timer.mp4')
video_20.video_file.attach(io: video_file_20, filename: '20_pink_countdown_timer.mp4')
video_20.save

