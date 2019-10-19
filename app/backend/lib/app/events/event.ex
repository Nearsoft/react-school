defmodule App.Events.Event do
  use Ecto.Schema
  import Ecto.Changeset
  alias App.Accounts.{Atendee, User}

  schema "events" do
    field :description, :string
    field :event_end_date, :date
    field :event_start_date, :date
    field :limit, :integer
    field :name, :string
    field :event_cost, :integer
    field :sell_end_date, :date
    field :sell_start_date, :date
    belongs_to :user, User
    many_to_many(:atendees, Atendee, join_through: "event_atendees")
    timestamps()
  end

  @doc false
  def changeset(event, attrs) do
    event
    |> cast(attrs, [:name, :description, :limit, :event_type, :sell_start_date, :sell_end_date, :event_start_date, :event_end_date, :user_id])
    |> validate_required([:name, :description, :limit, :sell_start_date, :sell_end_date, :event_start_date, :event_end_date])
  end
end
