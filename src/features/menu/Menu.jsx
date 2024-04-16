import {getMenu} from "../../services/apiRestaurant.js";
import {useLoaderData} from "react-router-dom";
import MenuItem from "./MenuItem.jsx";

function Menu() {

  const menu = useLoaderData();

  return (
      <ul>
        {menu.map(pizza => (
            <MenuItem pizza={pizza} key={pizza.id}/>
        ))}
      </ul>
  );
}
export default Menu;

//==========================================
export async function loader() {
  const menu = await getMenu(); // getting all the pizza menu data
  return menu;
}

