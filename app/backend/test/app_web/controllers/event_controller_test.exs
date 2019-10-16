defmodule AppWeb.EventControllerTest do
  use AppWeb.ConnCase

  alias App.Events
  alias App.Events.Event

  @create_attrs %{
    description: "some description",
    event_end_date: ~D[2010-04-17],
    event_start_date: ~D[2010-04-17],
    limit: 42,
    name: "some name",
    sell_end_date: "some sell_end_date",
    sell_start_date: ~D[2010-04-17]
  }
  @update_attrs %{
    description: "some updated description",
    event_end_date: ~D[2011-05-18],
    event_start_date: ~D[2011-05-18],
    limit: 43,
    name: "some updated name",
    sell_end_date: "some updated sell_end_date",
    sell_start_date: ~D[2011-05-18]
  }
  @invalid_attrs %{description: nil, event_end_date: nil, event_start_date: nil, limit: nil, name: nil, sell_end_date: nil, sell_start_date: nil}

  def fixture(:event) do
    {:ok, event} = Events.create_event(@create_attrs)
    event
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all events", %{conn: conn} do
      conn = get(conn, Routes.event_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create event" do
    test "renders event when data is valid", %{conn: conn} do
      conn = post(conn, Routes.event_path(conn, :create), event: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.event_path(conn, :show, id))

      assert %{
               "id" => id,
               "description" => "some description",
               "event_end_date" => "2010-04-17",
               "event_start_date" => "2010-04-17",
               "limit" => 42,
               "name" => "some name",
               "sell_end_date" => "some sell_end_date",
               "sell_start_date" => "2010-04-17"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.event_path(conn, :create), event: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update event" do
    setup [:create_event]

    test "renders event when data is valid", %{conn: conn, event: %Event{id: id} = event} do
      conn = put(conn, Routes.event_path(conn, :update, event), event: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.event_path(conn, :show, id))

      assert %{
               "id" => id,
               "description" => "some updated description",
               "event_end_date" => "2011-05-18",
               "event_start_date" => "2011-05-18",
               "limit" => 43,
               "name" => "some updated name",
               "sell_end_date" => "some updated sell_end_date",
               "sell_start_date" => "2011-05-18"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, event: event} do
      conn = put(conn, Routes.event_path(conn, :update, event), event: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete event" do
    setup [:create_event]

    test "deletes chosen event", %{conn: conn, event: event} do
      conn = delete(conn, Routes.event_path(conn, :delete, event))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.event_path(conn, :show, event))
      end
    end
  end

  defp create_event(_) do
    event = fixture(:event)
    {:ok, event: event}
  end
end
