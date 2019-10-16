defmodule App.Events.Event do
  use Ecto.Schema
  import Ecto.Changeset
  alias App.Accounts.User
  alias App.Events.List

  schema "events" do
    field :description, :string
    field :event_end_date, :date
    field :event_start_date, :date
    field :limit, :integer
    field :name, :string
    field :sell_end_date, :date
    field :sell_start_date, :date
    belongs_to :user, User
    has_many :list, List
    timestamps()
  end

  @doc false
  def changeset(event, attrs) do
    event
    |> cast(attrs, [:name, :description, :limit, :sell_start_date, :sell_end_date, :event_start_date, :event_end_date])
    |> validate_required([:name, :description, :limit, :sell_start_date, :sell_end_date, :event_start_date, :event_end_date])
  end
end
