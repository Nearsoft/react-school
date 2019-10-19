defmodule App.Repo.Migrations.CreateEvents do
  use Ecto.Migration

  def change do
    create table(:events) do
      add :name, :string
      add :description, :text
      add :limit, :integer
      add :sell_start_date, :date
      add :event_cost, :integer
      add :sell_end_date, :date
      add :event_start_date, :date
      add :event_end_date, :date
      add :user_id, references(:users)
      timestamps()
    end

    create index(:events, [:user_id])
  end
end
