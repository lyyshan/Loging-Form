import React, {useState} from "react";

function Loging(){
   const [formData, setFormData] = useState({
    userName:'',
    userEmail:"",
    userPassword:""
});
const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Form submitted with data:", formData);
}
const handleChage = (e)=>{
    const {name, value}= e.target;
    setFormData({
        ...formData,
        [name]:value
    });
};
       return(
        <>
            <form onSubmit={handleSubmit}>
               <label>
                User Name:
                <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChage}
                />
               </label>
               <label>
                User Email:
                <input
                    type="text"
                    name="userEmail"
                    value={formData.userEmail}
                    onChange={handleChage}
                />
               </label>
               <label>
                User Password:
                <input
                    type="password"
                    name="userPassword"
                    value={formData.userPassword}
                    onChange={handleChage}
                />
               </label>
               <button type="submit">Submit</button>
            </form>

            <div>
                <h3>Form Data</h3>
                <p>User Name:{formData.userName}</p>
                <p>User Email: {formData.userEmail}</p>
                <p>User Password:{formData.userPassword}</p>
            </div>
        </>
    )
}
export default Loging