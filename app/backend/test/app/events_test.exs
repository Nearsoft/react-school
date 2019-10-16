defmodule App.EventsTest do
  use App.DataCase

  alias App.Events

  describe "events" do
    alias App.Events.Event

    @valid_attrs %{description: "some description", event_end_date: ~D[2010-04-17], event_start_date: ~D[2010-04-17], limit: 42, name: "some name", sell_end_date: "some sell_end_date", sell_start_date: ~D[2010-04-17]}
    @update_attrs %{description: "some updated description", event_end_date: ~D[2011-05-18], event_start_date: ~D[2011-05-18], limit: 43, name: "some updated name", sell_end_date: "some updated sell_end_date", sell_start_date: ~D[2011-05-18]}
    @invalid_attrs %{description: nil, event_end_date: nil, event_start_date: nil, limit: nil, name: nil, sell_end_date: nil, sell_start_date: nil}

    def event_fixture(attrs \\ %{}) do
      {:ok, event} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Events.create_event()

      event
    end

    test "list_events/0 returns all events" do
      event = event_fixture()
      assert Events.list_events() == [event]
    end

    test "get_event!/1 returns the event with given id" do
      event = event_fixture()
      assert Events.get_event!(event.id) == event
    end

    test "create_event/1 with valid data creates a event" do
      assert {:ok, %Event{} = event} = Events.create_event(@valid_attrs)
      assert event.description == "some description"
      assert event.event_end_date == ~D[2010-04-17]
      assert event.event_start_date == ~D[2010-04-17]
      assert event.limit == 42
      assert event.name == "some name"
      assert event.sell_end_date == "some sell_end_date"
      assert event.sell_start_date == ~D[2010-04-17]
    end

    test "create_event/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Events.create_event(@invalid_attrs)
    end

    test "update_event/2 with valid data updates the event" do
      event = event_fixture()
      assert {:ok, %Event{} = event} = Events.update_event(event, @update_attrs)
      assert event.description == "some updated description"
      assert event.event_end_date == ~D[2011-05-18]
      assert event.event_start_date == ~D[2011-05-18]
      assert event.limit == 43
      assert event.name == "some updated name"
      assert event.sell_end_date == "some updated sell_end_date"
      assert event.sell_start_date == ~D[2011-05-18]
    end

    test "update_event/2 with invalid data returns error changeset" do
      event = event_fixture()
      assert {:error, %Ecto.Changeset{}} = Events.update_event(event, @invalid_attrs)
      assert event == Events.get_event!(event.id)
    end

    test "delete_event/1 deletes the event" do
      event = event_fixture()
      assert {:ok, %Event{}} = Events.delete_event(event)
      assert_raise Ecto.NoResultsError, fn -> Events.get_event!(event.id) end
    end

    test "change_event/1 returns a event changeset" do
      event = event_fixture()
      assert %Ecto.Changeset{} = Events.change_event(event)
    end
  end
end
