defmodule App.Repo.Migrations.CreateEventAtendees do
  use Ecto.Migration

  def change do
    create table(:event_atendees) do
      add :event_id, references(:events, on_delete: :nothing)
      add :atendee_id, references(:atendees, on_delete: :nothing)

      timestamps()
    end

    create index(:event_atendees, [:event_id])
    create index(:event_atendees, [:atendee_id])
    create unique_index(:event_atendees, [:event_id, :atendee_id])
  end
end
