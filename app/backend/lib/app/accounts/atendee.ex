defmodule App.Accounts.Atendee do
  use Ecto.Schema
  import Ecto.Changeset
  alias App.Events.Event

  schema "atendees" do
    field :email, :string
    field :name, :string
    field :tshirt_size, :string
    many_to_many(:events, Event, join_through: "event_atendee")
    timestamps()
  end

  @doc false
  def changeset(atendee, attrs) do
    atendee
    |> cast(attrs, [:name, :email, :tshirt_size])
    |> validate_required([:name, :email, :tshirt_size])
  end
end
