import Eateries from "./Eateries";
import "../Styles/Menu.css"
interface menuProps {
  menu:any
}
function MenuTypes({menu}:menuProps) {
  return (
    <div className="flex  items-center justify-center  bg-amber-500">
      <ul className="grid  grid-cols-1  md:grid-cols-3 place-items-center  text-center my-10 gap-5">
        {menu.map((item:any) => (
          <li
            key={item.name}
           
            className=" card cursor-pointer flex flex-col justify-center items-center bg-white  rounded   h-52 w-40 md:w-64  md:h-64  md:p-4   m-6 "
          >
            <img src={item.img} alt={item.name} className="h-10 w-10 sm:h-16 sm:w-16 md:h-32 md:w-32 " />
            <h2 className="m-2 text-xl md:text-2xl w-32 text-yellow-700 font-semibold ">
              {item.name}
            </h2>
            <p className="text-sl md:text-xl" >Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuTypes;
