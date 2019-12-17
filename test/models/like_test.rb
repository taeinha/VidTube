# == Schema Information
#
# Table name: likes
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  likable_type :string           not null
#  likable_id   :integer          not null
#  is_like      :boolean          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
