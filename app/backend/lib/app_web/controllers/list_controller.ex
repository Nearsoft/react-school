defmodule AppWeb.ListController do
  use AppWeb, :controller

  alias App.Events
  alias App.Events.List

  action_fallback AppWeb.FallbackController

  def index(conn, _params) do
    lists = Events.list_lists()
    render(conn, "index.json", lists: lists)
  end

  def create(conn, %{"list" => list_params}) do
    with {:ok, %List{} = list} <- Events.create_list(list_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.list_path(conn, :show, list))
      |> render("show.json", list: list)
    end
  end

  def show(conn, %{"id" => id}) do
    list = Events.get_list!(id)
    render(conn, "show.json", list: list)
  end

  def update(conn, %{"id" => id, "list" => list_params}) do
    list = Events.get_list!(id)

    with {:ok, %List{} = list} <- Events.update_list(list, list_params) do
      render(conn, "show.json", list: list)
    end
  end

  def delete(conn, %{"id" => id}) do
    list = Events.get_list!(id)

    with {:ok, %List{}} <- Events.delete_list(list) do
      send_resp(conn, :no_content, "")
    end
  end
end
