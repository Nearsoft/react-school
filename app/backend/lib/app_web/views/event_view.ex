defmodule AppWeb.EventView do
  use AppWeb, :view
  alias AppWeb.{AtendeeView, EventView, UserView}

  def render("index.json", %{events: events}) do
    %{data: render_many(events, EventView, "event.json")}
  end

  def render("show.json", %{event: event}) do
    %{data: render_one(event, EventView, "event.json")}
  end

  def render("event.json", %{event: event}) do
    %{
      id: event.id,
      name: event.name,
      description: event.description,
      limit: event.limit,
      sell_start_date: event.sell_start_date,
      sell_end_date: event.sell_end_date,
      cost: event.cost,
      thumbnail_url: event.thumbnail_url,
      event_start_date: event.event_start_date,
      event_end_date: event.event_end_date,
      user: render_one(event.user, UserView, "user.json"),
      atendees: render_many(event.atendees, AtendeeView, "atendee.json")
    }
  end
end
