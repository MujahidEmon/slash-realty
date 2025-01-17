import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, Outlet } from "react-router-dom";


const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div className="lg:max-w-7xl max-w-sm mx-auto">
            <div className="flex lg:flex-row  justify-between"> 
                <div className="gap-y-5 flex flex-col justify-center">
                    <h1 className="font-bold text-xl lg:text-2xl">Hello {user.displayName}</h1>
                    <p><span className="font-semibold">Name:</span> {user.displayName}</p>
                    <p><span className="font-semibold">Email:</span> {user.email}</p>
                    <Link to={'/profile/editProfile'} className="btn bg-green-500 text-white">Edit Your Profile</Link>
                </div>
                <img className="lg:h-fit  h-40 lg:w-fit w-40 rounded-xl object-cover" src={user.photoURL} alt="" />
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Profile;