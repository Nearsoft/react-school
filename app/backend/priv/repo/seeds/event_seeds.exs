alias App.Repo
alias App.Events.Event

Repo.insert!(%Event{
  description: "Nearsoft Con es un espacio con charlas, talleres y networking donde tendrás la oportunidad de conectar con otros miembros de la comunidad y aprender sobre diferentes tecnologías y hasta soft skills directamente de las personas que lo experimentan día a día.",
  event_end_date: ~D[2019-12-22],
  event_start_date: ~D[2019-12-20],
  limit: 100,
  address: "Calle 2da 2016 Col. Centro Chihuahua, Chihuahua, México 31000",
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
  cost: 0,
  name: "Summer Talks",
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
  cost: 0,
  name: "JavaScript: The Tricky Parts",
  sell_end_date: ~D[2019-12-10],
  sell_start_date: ~D[2019-12-19],
  user_id: 1,
})
