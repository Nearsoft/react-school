defmodule AppWeb.AtendeeControllerTest do
  use AppWeb.ConnCase

  alias App.Account
  alias App.Accounts.Atendee

  @create_attrs %{
    email: "some email",
    name: "some name",
    tshirt_size: "some tshirt_size"
  }
  @update_attrs %{
    email: "some updated email",
    name: "some updated name",
    tshirt_size: "some updated tshirt_size"
  }
  @invalid_attrs %{email: nil, name: nil, tshirt_size: nil}

  def fixture(:atendee) do
    {:ok, atendee} = Account.create_atendee(@create_attrs)
    atendee
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all atendees", %{conn: conn} do
      conn = get(conn, Routes.atendee_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create atendee" do
    test "renders atendee when data is valid", %{conn: conn} do
      conn = post(conn, Routes.atendee_path(conn, :create), atendee: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.atendee_path(conn, :show, id))

      assert %{
               "id" => id,
               "email" => "some email",
               "name" => "some name",
               "tshirt_size" => "some tshirt_size"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.atendee_path(conn, :create), atendee: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update atendee" do
    setup [:create_atendee]

    test "renders atendee when data is valid", %{conn: conn, atendee: %Atendee{id: id} = atendee} do
      conn = put(conn, Routes.atendee_path(conn, :update, atendee), atendee: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.atendee_path(conn, :show, id))

      assert %{
               "id" => id,
               "email" => "some updated email",
               "name" => "some updated name",
               "tshirt_size" => "some updated tshirt_size"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, atendee: atendee} do
      conn = put(conn, Routes.atendee_path(conn, :update, atendee), atendee: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete atendee" do
    setup [:create_atendee]

    test "deletes chosen atendee", %{conn: conn, atendee: atendee} do
      conn = delete(conn, Routes.atendee_path(conn, :delete, atendee))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.atendee_path(conn, :show, atendee))
      end
    end
  end

  defp create_atendee(_) do
    atendee = fixture(:atendee)
    {:ok, atendee: atendee}
  end
end
