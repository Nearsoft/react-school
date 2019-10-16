alias App.Repo
alias App.Events.EventAtendee

Repo.insert!(%EventAtendee{
  event_id: 1,
  atendee_id: 1
})
