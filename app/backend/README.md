# Setup environment Backend

## Install Elixir

### macOS

##### Homebrew
* Update your homebrew to latest: `brew update`
* Run: `brew install elixir`

### Unix
Go to -> [`https://elixir-lang.org/install.html#unix-and-unix-like`](https://elixir-lang.org/install.html#unix-and-unix-like)

### Windows

* Web installer [link aquí](https://repo.hex.pm/elixir-websetup.exe)
* next next next...

## Install Phoenix
Once you have Elixir installed follow the next steps.

* Run `mix local.hex`
* Run `mix archive.install hex phx_new 1.4.10`

## Install postgress
If you have already installed postgress, skip this step, if you don't I would recomend you [https://postgresapp.com/](https://postgresapp.com/).

Then inside `config/dev.ex` try to change:
```elixir
config :app, App.Repo,
  username: "cuubackup",
  password: "",
  database: "reactschool",
  hostname: "localhost",
  port: 5433

```

with your personal data

## Run the App.

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.
