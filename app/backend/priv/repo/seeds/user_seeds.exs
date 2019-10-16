alias App.Repo
alias App.Accounts.User

Repo.insert!(%User{
    name: "Jorge",
    last_name: "Chavez",
    email: "jorge@prueba.com",
    password: "jorge"
})

Repo.insert!(%User{
    name: "Cesar",
    last_name: "Laredo",
    email: "cesar@prueba.com",
    password: "cesar"
})

Repo.insert!(%User{
    name: "Jaime",
    last_name: "Duende",
    email: "jaime@prueba.com",
    password: "jaime"
})
