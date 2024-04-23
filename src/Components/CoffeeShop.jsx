const CoffeeShop = ({ coffee }) => {
  const { category, details, name, photo, quantity, supplier, taste, _id } =
    coffee;
  console.log(coffee);
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className=" grid grid-cols-2 items-center space-x-8">
          <div>
            <h2 className="">{name}</h2>
            <p>{category}</p>
            <p>{supplier.slice(0 - 5)}</p>
          </div>
          {/* <div className="card-actions justify-end"> */}
          <div className="join join-vertical  space-y-2">
            <button className="btn bg-orange-700 join-item">View</button>
            <button className="btn join-item bg-green-300">Edit</button>
            <button className="btn join-item bg-lime-400">Delete</button>
          </div>
        </div>
      </div>
      {/* </div>{" "} */}
    </div>
  );
};

export default CoffeeShop;
