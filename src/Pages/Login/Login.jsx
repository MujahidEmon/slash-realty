import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { data, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.config";
import { updateProfile } from "firebase/auth";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const {login, googleLogin, gitHubLogin, userUpdate} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    login(email, password)
    .then(result => {
      console.log(result.user);
      navigate(location?.state ? location.state : '/')
      console.log(location);
    })
    .catch(error => {
      console.error(error);
    })
  }

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      console.log(result.user);
      const photo = result.user.photoURL;
      const name = result.user.displayName;
      console.log(name, photo);

      // updating profile
      userUpdate(name, photo)
      .then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
        console.error(error);
        
      });
      navigate(location?.state ? location.state : '/')
      console.log(location);
      
    })
    .catch(error => {
      console.error(error);
    })
  }

  // gitHub login

  const handleGitHubLogin = () => {
    gitHubLogin()
    .then(result => {
      console.log(result.user);
      
      // setting displayName and profile pic to show on website
      const name = result.user.displayName;
      const photo = result.user.photoURL
      updateProfile(name, photo)
      .then(

      )
      .catch(error => {
        console.error(error);
        
      })
      navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
      console.error(error);
      
    })
  }

  return (
    <div className="flex border-2 mt-6 bg-base-100 rounded-lg max-w-xl mx-auto  font-montserrat justify-center ">
      <form
        // onSubmit={handleLogin}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg w-full px-6 py-8 mx-auto"
      >
        <div className="mb-6">
          <h3 className="text-gray-800 text-center text-2xl font-bold">Login</h3>
        </div>
        <div className="">
          <div>
            <label className="text-gray-800 text-sm block font-bold mt-4">
              Email
            </label>
            <div className="relative flex items-center">
              <input
                // name="email"
                // type="email"
                // required
                className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                placeholder="Enter email"
                {...register('email', {required: true})}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-2"
                viewBox="0 0 682.667 682.667"
                >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                  </clipPath>
                </defs>
                <g
                  clipPath="url(#a)"
                  transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                  <path
                    fill="none"
                    strokeMiterlimit="10"
                    strokeWidth="40"
                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                    data-original="#000000"
                    ></path>
                  <path
                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                    data-original="#000000"
                    ></path>
                </g>
              </svg>
            </div>
            {errors.email && <span className="text-primary text-xs font-medium">Please Enter Your Email</span>}
          </div>

          <div className="mt-4">
            <label className="text-gray-800 text-sm block font-bold ">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                // name="password"
                type={showPass ? "text" : "password"}
                required
                className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  validate: {
                    hasUppercase: (value) =>
                      /[A-Z]/.test(value) || "Must contain at least one uppercase letter",
                    hasLowercase: (value) =>
                      /[a-z]/.test(value) || "Must contain at least one lowercase letter",
                  },
                })}
              />
              <svg
                onClick={() => setShowPass(!showPass)}
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                viewBox="0 0 128 128"
              >
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-1 block text-sm text-gray-800"
              >
                Remember Me
              </label>
            </div>
          </div>

          <div className="mt-6">
            
              <button
                to={"/login"}
                className="w-full font-semibold rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Login</span>
              </button>
           
            <p className="text-gray-800 text-sm text-center mt-2">
              Don't have an account ?{" "}
              <Link className="text-green-500 font-bold" to={"/register"}>
                Register
              </Link>
            </p>
          </div>
        </div>

        <div className="my-4 flex items-center gap-4">
          <hr className="w-full border-gray-300" />
          <p className="text-sm text-gray-800 text-center">or</p>
          <hr className="w-full border-gray-300" />
        </div>

        <div className=" flex items-center gap-6 justify-center">
          <button onClick={handleGoogleLogin} className="btn btn-circle">
            <FaGoogle size={30}></FaGoogle>
          </button>
          <button onClick={handleGitHubLogin} className="btn btn-circle">
            <FaGithub size={30}></FaGithub>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
