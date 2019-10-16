defmodule AppWeb.ListView do
  use AppWeb, :view
  alias AppWeb.ListView

  def render("index.json", %{lists: lists}) do
    %{data: render_many(lists, ListView, "list.json")}
  end

  def render("show.json", %{list: list}) do
    %{data: render_one(list, ListView, "list.json")}
  end

  def render("list.json", %{list: list}) do
    %{
      id: list.id,
      event: %{
        event_id: list.event.id,
        description: list.event.description,
        name: list.event.name
      }
    }
  end
end
