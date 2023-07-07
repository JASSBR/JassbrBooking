import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const navigate = useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
      
            const newUser = {
              username: name,
              email:email,
              country:country,
              city:city,
              phone:phone,
              password:pass,
              isAdmin:false,
            };
      
            await axios.post("/auth/register", newUser).then(()=>{
                navigate("/login")
            });
          } catch (err) {
            console.log(err);
          }
    }

    return (
        <div className="register">
        
        <div className="registerContainer" >
            <input className="registerInput" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <input className="registerInput" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
          
            <input className="registerInput" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                     <input className="registerInput" value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="phone" id="phone" name="phone" />
                   <input className="registerInput" value={city} onChange={(e) => setCity(e.target.value)}  placeholder="city" id="city" name="city" />
            
            <input className="registerInput" value={country} onChange={(e) => setCountry(e.target.value)}  placeholder="country" id="country" name="country" />
            <button className="registerButton" onClick={handleSubmit}>Register</button>
        <Link to='/login' style={{textDecoration:"none" , color:"rgb(0, 73, 59)",textAlign:"center"}}>
        Already have an account? Login here.</Link>
        </div>
    </div>
    )
};
export default Register;
