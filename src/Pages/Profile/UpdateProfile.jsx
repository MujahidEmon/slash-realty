import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UpdateProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="divider"></div>
            <h1 className="font-bold text-xl">Edit Profile</h1>
            <div className="flex flex-col mt-6 gap-1">
                <label className="font-semibold" htmlFor="name">Name</label>
                <input className="w-96 px-4 py-2 rounded-lg bg-green-500 bg-opacity-30" type="text" name="name" placeholder={user.displayName} id="" />
            </div>
            <div className="flex flex-col my-4 gap-1">
                <label className="font-semibold" htmlFor="name">Email</label>
                <input className="w-96 px-4 py-2 rounded-lg bg-green-500 bg-opacity-30" type="text" name="name" placeholder={user.email} id="" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="font-semibold" htmlFor="name">Photo URL</label>
                <input className="w-96 px-4 py-2 rounded-lg bg-green-500 bg-opacity-30" type="text" name="name" placeholder={user.photoURL} id="" />
            </div>
            <button className="btn btn-success mt-4 text-white">Save</button>
        </div>
    );
};

export default UpdateProfile;