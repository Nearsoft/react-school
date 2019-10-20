alias App.Repo
alias App.Events.Event

Repo.insert!(%Event{
  description: "Nearsoft Con es un espacio con charlas, talleres y networking donde tendrás la oportunidad de conectar con otros miembros de la comunidad y aprender sobre diferentes tecnologías y hasta soft skills directamente de las personas que lo experimentan día a día.",
  event_end_date: ~D[2019-12-22],
  event_start_date: ~D[2019-12-20],
  limit: 100,
  address: "Calle 2da 2016 Col. Centro Chihuahua, Chihuahua, México 31000",
  city: "CUU",
  cost: 0,
  name: "NearsoftCon",
  sell_end_date: ~D[2019-12-19],
  sell_start_date: ~D[2019-12-10],
  user_id: 1,
})

Repo.insert!(%Event{
  description: "Los SummerTalks son el open house anual de Nearsoft. En la tradición de los NearsoftTalks, los expositores y participantes se juntan en un solo lugar a conversar de los temas que les apasionan. En esta ocasión tendremos temas variados en base a nuestra mayor pasión: el desarrollo de software. Tendremos 7 conferencias con distintos puntos de vista hacia reclutamiento, testing, development, UX Desing, mobile development y web development.",
  event_end_date: ~D[2019-12-11],
  event_start_date: ~D[2019-12-10],
  limit: 80,
  address: "Blvd. Antonio Quiroga 21 Edificio N1 y N3 - 3er piso Col. El Llano",
  city: "HMO",
  cost: 0,
  name: "Summer Talks",
  thumbnail_url: "https://cdn.dribbble.com/users/352736/screenshots/2089684/summertalks_illustration.png",
  sell_end_date: ~D[2019-12-01],
  sell_start_date: ~D[2019-12-09],
  user_id: 1,
})

Repo.insert!(%Event{
  description: "Let’s spend an evening learning about some of the tougher parts of JavaScript. We’ll be covering the keyword this, call, apply and bind, closures and a few other challenging concepts. There will be a lecture and lots of opportunities for you to do some hands-on coding. If there’s time, we’ll open the floor to questions or topics that you would like to discuss further.",
  event_end_date: ~D[2019-12-20],
  event_start_date: ~D[2019-12-25],
  limit: 100,
  address: "San Luis Potosí 196 1er Piso Col. Roma Norte Del. Cuauhtémoc Mexico, D.F.",
  city: "SLP",
  cost: 0,
  thumbnail_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F63329630%2F237121563757%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C22%2C810%2C405&s=b902213c6988b77de8542a8ce377c253",
  name: "JavaScript: The Tricky Parts",
  sell_end_date: ~D[2019-12-10],
  sell_start_date: ~D[2019-12-19],
  user_id: 1,
})
