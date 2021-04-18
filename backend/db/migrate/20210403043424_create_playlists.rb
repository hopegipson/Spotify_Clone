class CreatePlaylists < ActiveRecord::Migration[6.0]
  def change
    create_table :playlists do |t|
      t.text :name
      t.text :image, default: "https://i.pinimg.com/originals/7e/4f/89/7e4f892475aca7242883ceaf8aa89cc9.jpg"
      t.references :user, null: false, foreign_key: true


      t.timestamps
    end
  end
end
