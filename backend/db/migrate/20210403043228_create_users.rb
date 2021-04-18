class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.text :display_name
      t.text :spotifyid
      
      t.timestamps
    end
  end
end
