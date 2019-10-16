defmodule AppWeb.EventAtendeeView do
  use AppWeb, :view
  alias AppWeb.{AtendeeView, EventAtendeeView}

  def render("index.json",  %{atendees: atendees}) do
    %{data: render_many(atendees, EventAtendeeView, "atendee.json")}
  end

  def render("atendee.json", %{event_atendee: atendee}) do
    render_one(atendee, AtendeeView, "atendee.json")
  end
end
