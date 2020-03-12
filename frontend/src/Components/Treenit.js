import React from "react";

export default function(props) {
    return (
        <form>
            <label for="treenit">Treenit:</label>
            <select id="treenit">
  <option value="voima">Voima</option>
  <option value="laji">Laji</option>
  <option value="palauttava">Palauttava</option>
  <option value="cardio">Cardio</option>
</select>
<label for="rasitus">Rasitus (1-5):</label>
<select id="rasitus">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>

        </form>
        
    );
}