defmodule App.Events.List do
  use Ecto.Schema
  import Ecto.Changeset
  alias App.Events.Event
  alias App.Accounts.Atendee

  schema "lists" do
    belongs_to :event, Event
    has_many :atendees, Atendee
    timestamps()
  end

  @doc false
  def changeset(list, attrs) do
    list
    |> cast(attrs, [])
    |> validate_required([])
  end
end
