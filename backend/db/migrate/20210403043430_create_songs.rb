class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.text :name
      t.text :uri
      t.integer :duration_ms
      t.text :artists
      t.text :album
      t.timestamps
    end
  end
end
