import React from "react";

import "./Treenit.css"

export default function Treenit(props) {
    return (
      <div className="treenit">
        <form>
            <label for="treenit">Treenit:</label>
            <select id="treenit">
  <option value="kestovoima">Kestovoima</option>
  <option value="perusvoima">Perusvoima</option>
  <option value="maksimivoima">Maksimivoima</option>
  <option value="pikavoima">Pikavoima</option>
  <option value="laji">Laji</option>
  <option value="palauttava">Palauttava</option>
  <option value="cardio">Cardio</option>
</select>
<label for="rasitus">Rasitus (1-5):</label>
<select id="rasitus">
  <option value="1">1 erittäin kevyt</option>
  <option value="2">2 kevyt</option>
  <option value="3">3 keskiraskas</option>
  <option value="4">4 raskas</option>
  <option value="5">5 erittäin raskas</option>
</select>

        </form>
        </div>
    );
}