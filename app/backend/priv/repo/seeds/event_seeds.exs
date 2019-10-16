alias App.Repo
alias App.Events.Event

Repo.insert!(%Event{
  description: "Nearsoft Con es un espacio con charlas, talleres y networking donde tendrás la oportunidad de conectar con otros miembros de la comunidad y aprender sobre diferentes tecnologías y hasta soft skills directamente de las personas que lo experimentan día a día.",
  event_end_date: ~D[2019-12-20],
  event_start_date: ~D[2019-12-25],
  limit: 100,
  name: "NearsoftCon",
  sell_end_date: ~D[2019-12-10],
  sell_start_date: ~D[2019-12-19],
  user_id: 1,
})
