# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Video.destroy_all
User.destroy_all

tae = User.create(username: "taeha", email: "taeinha@gmail.com", password: "123456")
mochi = User.create(username: "mochi", email: "mochi@gmail.com", password: "123456")
truman = User.create(username: "truman", email: "truman@gmail.com", password: "123456")
demouser = User.create(username: "demouser", email: "demouser@gmail.com", password: "abcdef")

