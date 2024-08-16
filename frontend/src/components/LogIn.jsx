import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function LogIn() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-ghost absolute right-2 top-2 bg-transparent bg-clip-border bg-gradient-to-r from-cyan-300 to-violet-500">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Login</h3>
        <div className="card min-w-screen w-full bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="password"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="card-actions flex justify-between mt-3">
              <button className="btn bg-transparent bg-clip-border bg-gradient-to-r from-cyan-300 to-violet-500 hover:text-white">
                Login
              </button>
              <span className="mt-4">
                Not registered?
                <Link to="/signup">
                  <span className="cursor-pointer text-violet-600">
                    {" "}
                    SignUp!
                  </span>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default LogIn;
