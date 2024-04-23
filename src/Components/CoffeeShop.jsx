import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeShop = ({ coffee }) => {
  const { category, details, name, photo, quantity, supplier, taste, _id } =
    coffee;
  //   console.log(coffee);
  const handleDelete = (_id) => {
    console.log("I am here, do not shoud please", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn join-item bg-green-300">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-lime-400"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {/* </div>{" "} */}
    </div>
  );
};

export default CoffeeShop;
