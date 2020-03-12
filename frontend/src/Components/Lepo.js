import React from "react";

export default function(props) {
    return (
        <form>
            <label for="levonlaatu">Levon laatu:</label>
            <select id="levonlaatu">
  <option value="yöuni">Yöuni</option>
  <option value="päiväuni">Päiväuni</option>
</select>
<label for="kesto">Kesto tuntia:</label>
<select id="kesto">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
  <option value="13">13</option>
  <option value="14">14</option>
  <option value="15">15</option>
</select>
<label for="tunne levon jälkeen">Tunne levon jälkeen:</label>
            <select id="tunne levon jälkeen">
  <option value="virkeä">Virkeä</option>
  <option value="väsynyt">Väsynyt</option>
  </select>

        </form>
        
    );
}