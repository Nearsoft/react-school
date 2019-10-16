defmodule App.AccountTest do
  use App.DataCase

  alias App.Account

  describe "users" do
    alias App.Accounts.User

    @valid_attrs %{email: "some email", last_name: "some last_name", name: "some name", password: "some password"}
    @update_attrs %{email: "some updated email", last_name: "some updated last_name", name: "some updated name", password: "some updated password"}
    @invalid_attrs %{email: nil, last_name: nil, name: nil, password: nil}

    def user_fixture(attrs \\ %{}) do
      {:ok, user} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Account.create_user()

      user
    end

    test "list_users/0 returns all users" do
      user = user_fixture()
      assert Account.list_users() == [user]
    end

    test "get_user!/1 returns the user with given id" do
      user = user_fixture()
      assert Account.get_user!(user.id) == user
    end

    test "create_user/1 with valid data creates a user" do
      assert {:ok, %User{} = user} = Account.create_user(@valid_attrs)
      assert user.email == "some email"
      assert user.last_name == "some last_name"
      assert user.name == "some name"
      assert user.password == "some password"
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Account.create_user(@invalid_attrs)
    end

    test "update_user/2 with valid data updates the user" do
      user = user_fixture()
      assert {:ok, %User{} = user} = Account.update_user(user, @update_attrs)
      assert user.email == "some updated email"
      assert user.last_name == "some updated last_name"
      assert user.name == "some updated name"
      assert user.password == "some updated password"
    end

    test "update_user/2 with invalid data returns error changeset" do
      user = user_fixture()
      assert {:error, %Ecto.Changeset{}} = Account.update_user(user, @invalid_attrs)
      assert user == Account.get_user!(user.id)
    end

    test "delete_user/1 deletes the user" do
      user = user_fixture()
      assert {:ok, %User{}} = Account.delete_user(user)
      assert_raise Ecto.NoResultsError, fn -> Account.get_user!(user.id) end
    end

    test "change_user/1 returns a user changeset" do
      user = user_fixture()
      assert %Ecto.Changeset{} = Account.change_user(user)
    end
  end

  describe "atendees" do
    alias App.Accounts.Atendee

    @valid_attrs %{email: "some email", name: "some name", tshirt_size: "some tshirt_size"}
    @update_attrs %{email: "some updated email", name: "some updated name", tshirt_size: "some updated tshirt_size"}
    @invalid_attrs %{email: nil, name: nil, tshirt_size: nil}

    def atendee_fixture(attrs \\ %{}) do
      {:ok, atendee} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Account.create_atendee()

      atendee
    end

    test "list_atendees/0 returns all atendees" do
      atendee = atendee_fixture()
      assert Account.list_atendees() == [atendee]
    end

    test "get_atendee!/1 returns the atendee with given id" do
      atendee = atendee_fixture()
      assert Account.get_atendee!(atendee.id) == atendee
    end

    test "create_atendee/1 with valid data creates a atendee" do
      assert {:ok, %Atendee{} = atendee} = Account.create_atendee(@valid_attrs)
      assert atendee.email == "some email"
      assert atendee.name == "some name"
      assert atendee.tshirt_size == "some tshirt_size"
    end

    test "create_atendee/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Account.create_atendee(@invalid_attrs)
    end

    test "update_atendee/2 with valid data updates the atendee" do
      atendee = atendee_fixture()
      assert {:ok, %Atendee{} = atendee} = Account.update_atendee(atendee, @update_attrs)
      assert atendee.email == "some updated email"
      assert atendee.name == "some updated name"
      assert atendee.tshirt_size == "some updated tshirt_size"
    end

    test "update_atendee/2 with invalid data returns error changeset" do
      atendee = atendee_fixture()
      assert {:error, %Ecto.Changeset{}} = Account.update_atendee(atendee, @invalid_attrs)
      assert atendee == Account.get_atendee!(atendee.id)
    end

    test "delete_atendee/1 deletes the atendee" do
      atendee = atendee_fixture()
      assert {:ok, %Atendee{}} = Account.delete_atendee(atendee)
      assert_raise Ecto.NoResultsError, fn -> Account.get_atendee!(atendee.id) end
    end

    test "change_atendee/1 returns a atendee changeset" do
      atendee = atendee_fixture()
      assert %Ecto.Changeset{} = Account.change_atendee(atendee)
    end
  end
end
