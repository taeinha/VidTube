# == Schema Information
#
# Table name: likes
#
#  id           :bigint           not null, primary key
#  user_id      :integer
#  likable_type :string
#  likable_id   :bigint
#  is_like      :boolean
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Like < ApplicationRecord
  validates :user_id, :likable_id, :likable_type, presence: true
  validates :is_like, inclusion: { in: [ true, false ] }
  validates :user_id, uniqueness: { scope: [:likable_id, :likable_type] }
  
  belongs_to :likable, polymorphic: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
