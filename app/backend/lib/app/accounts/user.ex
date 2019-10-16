defmodule App.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias App.Events.Event

  schema "users" do
    field :email, :string
    field :last_name, :string
    field :name, :string
    field :password, :string
    has_many :events, Event
    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :last_name, :email, :password, :event_id])
    |> validate_required([:name, :last_name, :email, :password])
    |> unique_constraint(:email)
  end
end
