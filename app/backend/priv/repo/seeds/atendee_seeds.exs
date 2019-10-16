alias App.Repo
alias App.Accounts.Atendee

Repo.insert!(%Atendee{
  email: "saul@prueba.com",
  name: "Saul Cova",
  tshirt_size: "XL"
})

Repo.insert!(%Atendee{
  email: "pedro@prueba.com",
  name: "Pedro Palma",
  tshirt_size: "L"
})
