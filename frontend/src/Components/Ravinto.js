import React from "react";

export default function(props) {
    return (
    
            <form>
            <label for="ruokailu">Ruokailu:</label>
            <select id="ruokailu">
  <option value="aamiainen">Aamiainen</option>
  <option value="lounas">Lounas</option>
  <option value="välipala">Välipala</option>
  <option value="päivällinen">Päivällinen</option>
  <option value="iltapala">Iltapala</option>
</select>
<label for="määrä">Määrä:</label>
<select id="määrä">
  <option value="vakio">Vakio</option>
  <option value="iso annos">Iso annos</option>
  <option value="vähän">Vähän</option>
  <option value="proteiinipitoinen">Proteiinipitoinen</option>
  <option value="hiilihydraatteja">Hiilihydraatteja</option>
</select>
<label for="suhde kulutukseen">Suhde kulutukseen:</label>
            <select id="suhde kulutukseen">
  <option value="riittävä">Riittävä</option>
  <option value="liikaa">Liikaa</option>
  <option value="liian vähän">Liian vähän</option>
</select>

        </form>
        
    
    );
}