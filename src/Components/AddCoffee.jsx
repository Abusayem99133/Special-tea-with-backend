import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    // const name = form.name.value;
    // const name = form.name.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          //   alert("ki holo");
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        //  else {
        //   Swal.fire({
        //     title: "Error!",
        //     text: "User Added Successfully",
        //     icon: "Error",
        //     confirmButtonText: "Cool",
        //   });
        // }
      });
  };
  return (
    <div>
      <h1 className="text-4xl text-purple-700 font-extrabold text-center">
        Add Coffee to your shop
      </h1>
      <form onSubmit={handleAddCoffee} className="bg-slate-200 mt-8 p-5">
        {/* form name and quantity row  */}
        <div className=" flex space-x-2  p-5 items-center text-center;">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="bg-slate-200 flex space-x-2 p-5 items-center text-center;">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="supplier"
                placeholder="supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="bg-slate-200 flex space-x-2  p-5 items-center text-center;">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control p-5">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <label className="input-group">
            {/* <span>Name</span> */}
            <input
              type="text"
              name="photo"
              placeholder="Enter phot URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <button className="text-center w-full p-4 font-extrabold border-2 border-[#25130f] bg-[#988265] text-[#25130f] rounded-xl">
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
