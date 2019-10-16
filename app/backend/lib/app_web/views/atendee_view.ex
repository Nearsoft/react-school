defmodule AppWeb.AtendeeView do
  use AppWeb, :view
  alias AppWeb.AtendeeView

  def render("index.json", %{atendees: atendees}) do
    %{data: render_many(atendees, AtendeeView, "atendee.json")}
  end

  def render("show.json", %{atendee: atendee}) do
    %{data: render_one(atendee, AtendeeView, "atendee.json")}
  end

  def render("atendee.json", %{atendee: atendee}) do
    %{id: atendee.id,
      name: atendee.name,
      email: atendee.email,
      tshirt_size: atendee.tshirt_size}
  end
end
