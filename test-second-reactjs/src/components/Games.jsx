import { useState } from "react";

function Games() {
  const [games, setGames] = useState([
    { title: "V Rising", studio: "Stunlock Studios", year: 2024 },
    { title: "Dead Cells", studio: "Motion Twin", year: 2018 },
    { title: "Inscryption", studio: "Daniel Mullins Games", year: 2021 },
  ]);

  const listGames = games.map((game, index) => (
    <ul key={index} className="info">
      <li>{game.title} created by {game.studio} released in {game.year}</li>
      <button type="button" id="btnDelete" onClick={() => deleteGame(index)}>DELETE</button>
    </ul>
  ));

  const [title, setTitle] = useState("");
  const [studio, setStudio] = useState("");
  const [year, setYear] = useState("");

  function addGame() {
    setGames([...games, { title, studio, year: parseInt(year) }]);
    setTitle("");
    setStudio("");
    setYear("");
  }

  function deleteGame(index) {
    setGames(games.filter((_,i) => i !== index))
  }

  return (
    <div className="show">
      {listGames}
      <form>
        <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Studio" value={studio} onChange={(e) => setStudio(e.target.value)} required/>
        <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
        <button type="button" id="btnAdd" onClick={addGame}>ADD</button>
      </form>
    </div>
  )
}

export default Games;