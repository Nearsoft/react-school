defmodule AppWeb.EventAtendeeController do
  use AppWeb, :controller

  alias App.Events

  def index(conn, %{"event_id" => event_id}) do
    atendees = Events.list_atendees(event_id) |> Map.get(:atendees)
    render(conn, "index.json", atendees: atendees)
  end
end
