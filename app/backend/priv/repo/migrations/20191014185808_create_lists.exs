defmodule App.Repo.Migrations.CreateLists do
  use Ecto.Migration

  def change do
    create table(:lists) do
      add :atendee_id, references(:atendees, on_delete: :nothing)
      add :event_id, references(:events, on_delete: :nothing)

      timestamps()
    end

    create index(:lists, [:atendee_id])
    create index(:lists, [:event_id])
  end
end
