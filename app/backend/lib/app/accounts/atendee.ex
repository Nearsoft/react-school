defmodule App.Accounts.Atendee do
  use Ecto.Schema
  import Ecto.Changeset
  alias App.Events.List

  schema "atendees" do
    field :email, :string
    field :name, :string
    field :tshirt_size, :string
    belongs_to :list, List
    timestamps()
  end

  @doc false
  def changeset(atendee, attrs) do
    atendee
    |> cast(attrs, [:name, :email, :tshirt_size])
    |> validate_required([:name, :email, :tshirt_size])
  end
end
