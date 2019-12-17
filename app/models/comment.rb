# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  user_id           :integer          not null
#  video_id          :integer          not null
#  parent_comment_id :integer
#  body              :text             not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Comment < ApplicationRecord
  validates :user_id, :video_id, :body, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :video,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Video
end
