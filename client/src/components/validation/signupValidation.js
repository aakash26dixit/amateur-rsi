import * as yup from "yup";

export const userSchema = yup.object().shape({
    // name: yup.string().min(1).required("Name is required"),
    // email: yup.string().email().required(),
    // password: yup.string().required(),
    // cpassword: yup.string().required(),
    // phone: yup.number().typeError("Number").min(10).required(),

    name: yup.string().required("Name is required"),
    email: yup.string().email().required(),
    phone: yup.number().required().min(10),
    work: yup.string().required(),
    password: yup.string().required(),
    cpassword: yup.string().required(),
    
})

// let compare = string().matches()
