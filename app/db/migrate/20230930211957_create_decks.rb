class CreateDecks < ActiveRecord::Migration[7.0]
  def self.up
    create_table :decks do |t|
      t.string   :title
      t.string   :description
      t.string   :gamemode
      t.string   :code
      t.integer  :user_id
      t.string   :version
      t.string   :game

      t.timestamps
    end
  end

  def self.down
    drop_table :decks
  end
end
