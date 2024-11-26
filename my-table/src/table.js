import "./table.css";
import Ram from "./ram.jpg";
import Shiva from "./shiva.jpg";
import Hanuman from "./hanuman.jpg";
import Balaji from "./balaji.jpg";
import Krishna from "./krishna.jpg";

function Tableapp() {
  return (
    <div>
      <table>
        <tr>
          <th>S. NO </th>
          <th>NAME </th>
          <th>IMAGE</th>
          <th>POWERS</th>
          <th>TEMPLES</th>
        </tr>
        <tr>
          <td>1 </td>
          <td>Sri Ram </td>
          <td>
            <img src={Ram} alt="Ram" />
          </td>
          <td>Strength, Morality, and Compassion</td>
          <td>Ayodhya </td>
        </tr>
        <tr>
          <td>2 </td>
          <td>Shiva </td>
          <td>
            <img src={Shiva} alt="Shiva" />
          </td>
          <td>Destruction, Compassion, and Enlightenment</td>
          <td> Kedarnath</td>
        </tr>
        <tr>
          <td>3 </td>
          <td>Hanuman </td>
          <td>
            <img src={Hanuman} alt="Hanuman" />
          </td>
          <td>Devotion, Wisdom, and Selflessness</td>
          <td> Himachal Pradesh</td>
        </tr>
        <tr>
          <td>4 </td>
          <td>Balaji</td>
          <td>
            <img src={Balaji} alt="Balaji" />
          </td>
          <td>Hope, Faith, and Divine Blessings</td>
          <td> Tirumala</td>
        </tr>
        <tr>
          <td>5 </td>
          <td>Krishna </td>
          <td>
            <img src={Krishna} alt="Krishna" />
          </td>
          <td>Compassion, Playful charm, and Strategic Brilliance</td>
          <td> Dwarka</td>
        </tr>
      </table>
    </div>
  );
}
export default Tableapp;
