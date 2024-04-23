import { useLoaderData } from "react-router-dom";
import CoffeeShop from "./CoffeeShop";

const MainRoot = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl text-center text-orange-400">
        Main Root Is coming: {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-16 bg-purple-400">
        {coffees.map((coffee) => (
          <CoffeeShop key={coffee._id} coffee={coffee}></CoffeeShop>
        ))}
      </div>
    </div>
  );
};

export default MainRoot;
