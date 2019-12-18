# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             default("")
#  view_count  :integer          default(0), not null
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord

  validates :title, :view_count, :uploader_id, presence: true

  validate :ensure_video
  validate :ensure_thumbnail
  after_initialize :ensure_view_count

  belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User
  
  has_many :comments,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Comment,
    dependent: :destroy

  has_many :likes, 
    as: :likable,
    dependent: :destroy

  has_one_attached :video_file
  has_one_attached :thumbnail_file

  def ensure_video
    unless self.video_file.attached?
      errors[:video_file] << "must be attached!"
    end
  end

  def ensure_thumbnail
    unless self.thumbnail_file.attached?
      errors[:thumbnail_file] << "must be attached!"
    end
  end

  def ensure_view_count
    self.view_count ||= 0
  end

  def self.search_by_title(search_input)
    Video.where("title ILIKE :search", search: "%#{search_input}%").to_a
  end
end
