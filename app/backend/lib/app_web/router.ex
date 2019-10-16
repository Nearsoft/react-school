defmodule AppWeb.Router do
  use AppWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", AppWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", AppWeb do
    pipe_through :api

    resources "/user", UserController, only: [:index, :show, :create]
    resources "/atendee", AtendeeController, only: [:index, :new, :edit, :show, :create]
    resources "/event", EventController, only: [:index, :new, :edit, :show, :create]
  end
end
