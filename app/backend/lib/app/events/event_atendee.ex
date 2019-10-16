defmodule App.Events.EventAtendee do
  use Ecto.Schema
  import Ecto.Changeset
  alias App.Events.Event
  alias App.Accounts.Atendee
  
  schema "event_atendees" do
    belongs_to :event, Event
    belongs_to :atendee, Atendee

    timestamps()
  end

  @doc false
  def changeset(event_atendee, attrs) do
    event_atendee
    |> cast(attrs, [])
    |> validate_required([])
  end
end
