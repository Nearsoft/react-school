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
    plug CORSPlug, origin: "http://localhost:3000"
  end

  scope "/", AppWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", AppWeb do
    pipe_through :api

    resources "/user", UserController, only: [:index, :show, :create]
    resources "/atendee", AtendeeController, only: [:index, :edit, :show, :create]
    options "/event", EventController, :options
    resources "/event", EventController, only: [:index, :show, :create, :edit] do
      get "/atendees", EventAtendeeController, :index
      post "/attend", EventAtendeeController, :create
    end
  end
end
