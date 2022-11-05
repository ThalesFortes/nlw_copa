function creatGames(player1, hour, player2) {
  return `
          <li>
            <img src="./assets/${player1}_icon.svg" alt="Seleção do ${player1}" />
            <strong>${hour}</strong>
            <img src="./assets/${player2}_icon.svg" alt="Seleção do ${player2}" />
          </li>`
}

let delay = -0.4
function creatCards(date, hour, games) {
  delay = delay + 0.4
  return `
  <div class="card" style= "animation-delay:${delay}">
  <h2>
    ${date}<span>${hour}</span>
  </h2>
    <ul>
      ${games}
    </ul>
  </div>`
}

document.querySelector("#cards").innerHTML =
  creatCards("24/11", "Quinta", creatGames("Brazil", "16:00", "Servia")) +
  creatCards(
    "28/11",
    "segunda",
    creatGames("Switzerland", "13:00", "Brazil") +
      creatGames("Portugal", "16:00", "Uruguai")
  ) +
  creatCards("02/12", "sexta", creatGames("Brazil", "16:00", "Cameroon"))
