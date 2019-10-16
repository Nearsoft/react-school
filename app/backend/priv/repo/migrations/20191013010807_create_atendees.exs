defmodule App.Repo.Migrations.CreateAtendees do
  use Ecto.Migration

  def change do
    create table(:atendees) do
      add :name, :string
      add :email, :string
      add :tshirt_size, :string

      timestamps()
    end

    create unique_index(:atendees, [:email])

  end
end
