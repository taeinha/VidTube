# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  view_count  :integer          default(0), not null
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord

  validates :title, :description, :view_count, :uploader_id, presence: true

  validate :ensure_video
  after_initialize :ensure_view_count

  belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

  has_one_attached :video

  def ensure_video
    unless self.video.attached?
      errors[:video] << "Video must be attached!"
    end
  end

  def ensure_view_count
    self.view_count ||= 0
  end
end
