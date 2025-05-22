import userModel from "../models/user.model.js";

export const createUser = async ({firstname, lastname, email, password}) => {
    if(!firstname){
        throw new Error("First Name is required");
    }

    if(!lastname){
        throw new Error("Last Name is required");
    }

    if(!email){
        throw new Error("Email is required");
    }

    if(!password){
        throw new Error("Password is required");
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password: hashedPassword
    })

    return user;
}