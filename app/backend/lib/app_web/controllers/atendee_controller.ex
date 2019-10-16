defmodule AppWeb.AtendeeController do
  use AppWeb, :controller

  alias App.Account
  alias App.Accounts.Atendee

  action_fallback AppWeb.FallbackController

  def index(conn, _params) do
    atendees = Account.list_atendees()
    render(conn, "index.json", atendees: atendees)
  end

  def create(conn, %{"atendee" => atendee_params}) do
    with {:ok, %Atendee{} = atendee} <- Account.create_atendee(atendee_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.atendee_path(conn, :show, atendee))
      |> render("show.json", atendee: atendee)
    end
  end

  def show(conn, %{"id" => id}) do
    atendee = Account.get_atendee!(id)
    render(conn, "show.json", atendee: atendee)
  end

  def update(conn, %{"id" => id, "atendee" => atendee_params}) do
    atendee = Account.get_atendee!(id)

    with {:ok, %Atendee{} = atendee} <- Account.update_atendee(atendee, atendee_params) do
      render(conn, "show.json", atendee: atendee)
    end
  end

  def delete(conn, %{"id" => id}) do
    atendee = Account.get_atendee!(id)

    with {:ok, %Atendee{}} <- Account.delete_atendee(atendee) do
      send_resp(conn, :no_content, "")
    end
  end
end
