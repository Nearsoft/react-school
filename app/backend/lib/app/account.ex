defmodule App.Account do
  @moduledoc """
  The Account context.
  """

  import Ecto.Query, warn: false
  alias App.Repo

  alias App.Accounts.User

  @doc """
  Returns the list of users.

  ## Examples

      iex> list_users()
      [%User{}, ...]

  """
  def list_users do
    Repo.all(User)
  end

  @doc """
  Gets a single user.

  Raises `Ecto.NoResultsError` if the User does not exist.

  ## Examples

      iex> get_user!(123)
      %User{}

      iex> get_user!(456)
      ** (Ecto.NoResultsError)

  """
  def get_user!(id), do: Repo.get!(User, id)

  @doc """
  Creates a user.

  ## Examples

      iex> create_user(%{field: value})
      {:ok, %User{}}

      iex> create_user(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a user.

  ## Examples

      iex> update_user(user, %{field: new_value})
      {:ok, %User{}}

      iex> update_user(user, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a User.

  ## Examples

      iex> delete_user(user)
      {:ok, %User{}}

      iex> delete_user(user)
      {:error, %Ecto.Changeset{}}

  """
  def delete_user(%User{} = user) do
    Repo.delete(user)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking user changes.

  ## Examples

      iex> change_user(user)
      %Ecto.Changeset{source: %User{}}

  """
  def change_user(%User{} = user) do
    User.changeset(user, %{})
  end

  alias App.Accounts.Atendee

  @doc """
  Returns the list of atendees.

  ## Examples

      iex> list_atendees()
      [%Atendee{}, ...]

  """
  def list_atendees do
    Repo.all(Atendee)
  end

  @doc """
  Gets a single atendee.

  Raises `Ecto.NoResultsError` if the Atendee does not exist.

  ## Examples

      iex> get_atendee!(123)
      %Atendee{}

      iex> get_atendee!(456)
      ** (Ecto.NoResultsError)

  """
  def get_atendee!(id), do: Repo.get!(Atendee, id)

  @doc """
  Creates a atendee.

  ## Examples

      iex> create_atendee(%{field: value})
      {:ok, %Atendee{}}

      iex> create_atendee(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_atendee(attrs \\ %{}) do
    %Atendee{}
    |> Atendee.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a atendee.

  ## Examples

      iex> update_atendee(atendee, %{field: new_value})
      {:ok, %Atendee{}}

      iex> update_atendee(atendee, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_atendee(%Atendee{} = atendee, attrs) do
    atendee
    |> Atendee.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Atendee.

  ## Examples

      iex> delete_atendee(atendee)
      {:ok, %Atendee{}}

      iex> delete_atendee(atendee)
      {:error, %Ecto.Changeset{}}

  """
  def delete_atendee(%Atendee{} = atendee) do
    Repo.delete(atendee)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking atendee changes.

  ## Examples

      iex> change_atendee(atendee)
      %Ecto.Changeset{source: %Atendee{}}

  """
  def change_atendee(%Atendee{} = atendee) do
    Atendee.changeset(atendee, %{})
  end
end
