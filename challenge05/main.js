const participants = [
  "Gorusuke",
  "DavidFabian",
  "ItziarZG",
  "edy WOLF",
  "MarcosGaPe",
  "Jose Jimenez",
  "Borja ",
  "Jhonathan Izquierdo Higuita",
  "MiLfeR322",
  "Sebastián Espínola",
  "Matias Luna",
  "Imanol Decima",
  "MarcoCasula",
  "MaríaBohórquez",
  "Renan",
  "IvanL'olivier",
  "Shonero",
  "Luichidev",
  "Faviola Narvaez",
  "Christopher Fuentes",
  "Kuro",
  "Juan Pablo Addeo",
  "Sergio Martínez",
  "Fran Enriquez González",
  "Diana",
  "tictools",
  "ConchaAsensio",
  "Emilio_Arreaza",
  "novamix",
  "Tomas Duclos",
  "Elaya",
  "Ignacio Palominos",
  "David C.",
  "Gerardo Felipe Conrado",
  "ElXuri",
  "David Borja Martinez",
  "JaviFelices",
  "CarlesSànchez",
  "Gorusuke",
  "DavidFabian",
  "ItziarZG",
  "edy WOLF",
  "MarcosGaPe",
  "Jose Jimenez",
  "Borja ",
  "Jhonathan Izquierdo Higuita",
  "MiLfeR322",
  "Sebastián Espínola",
  "Matias Luna",
  "Imanol Decima",
  "MarcoCasula",
  "MaríaBohórquez",
  "Renan",
  "IvanL'olivier",
  "Shonero",
  "Luichidev",
  "Faviola Narvaez",
  "Christopher Fuentes",
  "Kuro",
  "Juan Pablo Addeo",
  "Sergio Martínez",
  "Fran Enriquez González",
  "Diana",
  "tictools",
  "ConchaAsensio",
  "Emilio_Arreaza",
  "novamix",
  "Tomas Duclos",
  "Elaya",
  "Ignacio Palominos",
  "David C.",
  "Gerardo Felipe Conrado",
  "ElXuri",
  "David Borja Martinez",
  "JaviFelices",
  "CarlesSànchez",
  "Gorusuke",
  "DavidFabian",
  "ItziarZG",
  "edy WOLF",
  "MarcosGaPe",
  "Jose Jimenez",
  "Borja ",
  "Jhonathan Izquierdo Higuita",
  "MiLfeR322",
  "Sebastián Espínola",
  "Matias Luna",
  "Imanol Decima",
  "MarcoCasula",
  "MaríaBohórquez",
  "Renan",
  "IvanL'olivier",
  "Shonero",
  "Luichidev",
  "Faviola Narvaez",
  "Christopher Fuentes",
  "Kuro",
  "Juan Pablo Addeo",
  "Sergio Martínez",
  "Fran Enriquez González",
  "Diana",
  "tictools",
  "ConchaAsensio",
  "Emilio_Arreaza",
  "novamix",
  "Tomas Duclos",
  "Elaya",
  "Ignacio Palominos",
  "David C.",
  "Gerardo Felipe Conrado",
  "ElXuri",
  "David Borja Martinez",
  "JaviFelices",
  "CarlesSànchez"
]

let aliveParticipants = [...participants]

while (aliveParticipants.length > 1) {
  // console.log({aliveParticipants})

  for (let i = 0; i < aliveParticipants.length; i += 2) {
    if (i + 1 < aliveParticipants.length) aliveParticipants[i + 1] = false
    else aliveParticipants.shift
  }

  aliveParticipants = aliveParticipants.filter(p => p)
}

console.log('Solución:', aliveParticipants[0] + '-' + participants.findIndex(p => p === aliveParticipants[0]))

