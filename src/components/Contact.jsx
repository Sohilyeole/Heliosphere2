import { useState } from "react";
// import HomeLayout from "../Layouts/HomeLayout";
// import toast from "react-hot-toast";
// import { isEmail } from "../helper/regexMatcher";
// import axios from "axios";
// import axiosInstance from "../helper/axiosInstance";

function Contact(){
    const [userInput,setUserInput]=useState({
        name:"",
        email:"",
        message:"",
    })
    function handleInputChange(e){
       const {name,value}=e.target;
       console.log(name,value)
       setUserInput({
        ...userInput,[name]:value
       })

    }

    async function onFormSubmit(e){
        e.preventDefault();
        if(!userInput.email || !userInput.name ||!userInput.message){
            toast.error("All Feild are mandatory")
            return;

        }
        if(!isEmail(userInput.email)){
            toast.error("Invalid email")
            return;
        }
        else{
            toast.success("orm submitted Sucessfully")
            setUserInput({
                            name:"",
                            email:"",
                            message:"",
                        })
        }
        // try {
        //     const res=axiosInstance.post("/contact",userInput)
        //     toast.promise(res,{
        //         loading:"submiting your message",
        //         success:"form submitted Sucessfully",
        //         error:"Failed to submit form"
        //     })
        //     const contactres=await res;
        //     if(contactres?.data?.success){
        //         setUserInput({
        //             name:"",
        //             email:"",
        //             message:"",
        //         })
        //     }

        // } catch (error) {
        //     toast.error("operation failed")
        // }

    }
return(
    // <HomeLayout>
        <div className="flex items-center justify-center h-[85vh] bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <form className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]  bg-gray-800" onSubmit={onFormSubmit} noValidate>
            <h1 className="text-3xl font-semibold">
                Contact Form
            </h1>
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="name" className="text-xl font-semibold">Name</label>
                <input  className="bg-transparent border px-2 py-1 rounded-sm" id="name"  type="text" name="name" placeholder="Enter Your Name"  onChange={handleInputChange} value={userInput.name} />
            </div>
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="email" className="text-xl font-semibold">Email</label>
                <input  className="bg-transparent border px-2 py-1 rounded-sm" id="email"  type="email" name="email" placeholder="Enter Your Email"  onChange={handleInputChange} value={userInput.email}  />
            </div>
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="message" className="text-xl font-semibold">Message</label>
                <textarea  className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40 " id="message"   name="message" placeholder="Enter Your Message" onChange={handleInputChange} value={userInput.message}  />

            </div>
            <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-400 transition-all ease-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
                Submit
            </button>
        </form>
        </div>
    // </HomeLayout>
)
}
export default Contact;