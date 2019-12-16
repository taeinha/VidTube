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

require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
