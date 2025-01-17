import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const UpdateProfile = () => {
     useEffect(() => {
        document.title = 'SLASH Realty: Update Profile';
      }, []);
    const {user, userUpdate} = useContext(AuthContext)
    const navigate = useNavigate()

    // react hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const name = data.displayName ? data.displayName : user?.displayName;
        const photo = data.photoURL ? data.photoURL : user?.photoURL;
        console.log(name, photo);
            userUpdate(name, photo)
              .then(() => {
                toast.success('Profile Updated')
                
                navigate('/profile')
                
              })
              .catch((error) => {
                // An error occurred
                // ...
                console.error(error);
              });
      };
    const handleSave = () => {
        
    }
    return (
        <div>
            <div className="divider"></div>
            <h1 className="font-bold text-xl">Edit Profile</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mt-6 gap-1">
                    <label className="font-semibold" htmlFor="name">Name</label>
                    <input className="w-96 px-4 py-2 rounded-lg bg-green-500 bg-opacity-30" type="text" name="name" placeholder={user.displayName} id="" 
                    
                    {...register('displayName')}/>
                </div>
                <div className="flex flex-col  my-4 gap-1">
                    <label className="font-semibold" htmlFor="name">Photo URL</label>
                    <input className="w-96 px-4 py-2 rounded-lg bg-green-500 bg-opacity-30" type="text" name="name" placeholder={user.photoURL} id="" 
                    {...register('photoURL')}/>
                </div>
                
                <button className="btn btn-success mt-4 text-white">Save</button>
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default UpdateProfile;