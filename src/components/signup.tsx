import ThemeProvider from "./theme-provider";
import Navbar from "./defaultNavbar";
import SignUpNavBar from "./signup-navbar";
import { validatePhone } from "../../hooks/tools/useValidation";
import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";

export function SignUp() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    /* if any form is empty, return that that form is empty*/
    Object.keys(form).forEach((key) => {
      if (form[key] === "") {
        newErrors[key] = `${key} is required`;
      }
    });

    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!validatePhone(form.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      
      

      console.log("Form submitted");

    } else {
      console.log("Form not submitted");
    }


  }
  return (
    <ThemeProvider>
      <SignUpNavBar />
      <section className="grid h-screen items-center p-8">
        <div className="text-center">
          <Typography variant="h3" color="blue-gray" className="mb-2">
            Join us today
          </Typography>
          <Typography className="font-normal mb-12 text-blue-gray-800">
            Enter your email and password to register.
          </Typography>
          <form action="#" className="mx-auto max-w-[24rem] text-left" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Input color="black" size="lg" label="First Name" type="text" name="firstname" onChange={handleChange} />
                {errors.firstname && <Typography className="text-red-500">**{errors.firstname}**</Typography>}
              </div>
              <div>
                <Input color="black" size="lg" label="Last Name" type="text" name="lastname" onChange={handleChange}/>
                {errors.lastname && <Typography className="text-red-500">**{errors.lastname}**</Typography>}
              </div>
              <div>
                <Input color="black" size="lg" label="Email" type="email" name="email" onChange={handleChange}/>
                {errors.email && <Typography className="text-red-500">**{errors.email}**</Typography>}
              </div>
              <div>
                <Input color="black" size="lg" label="Phone Number" type="tel" name="phone" onChange={handleChange}/>
                {errors.phone && <Typography className="text-red-500">**{errors.phone}**</Typography>}
              </div>
              <div>
                <Input color="black" size="lg" label="Password" type="password" name="password" onChange={handleChange}/>
                {errors.password && <Typography className="text-red-500">**{errors.password}**</Typography>}
              </div>
              <div>
                <Input color="black" size="lg" label="Confirm Password" type="password" name="confirmPassword" onChange={handleChange}/>
                {errors.confirmPassword && <Typography className="text-red-500">**{errors.confirmPassword}**</Typography>}
              </div>
            </div>
            
            <Button color="dark" size="lg" className="mt-4" fullWidth type="submit">
              Sign Up
            </Button>
            
            
            
          
          </form>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default SignUp;

