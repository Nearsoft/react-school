defmodule App.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string
      add :last_name, :string
      add :email, :string
      add :password, :string

      timestamps()
    end

    create unique_index(:users, [:email])

  end
end
