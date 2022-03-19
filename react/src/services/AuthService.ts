import AppAxiosInstance from "./AxiosInstance";


export const authenticationCheck = async (data: any) => {
    return await AppAxiosInstance.post('/api/authCheck',{ username: data.email, password: data.password});
}


export const userRegister = async (data:any) => {
    return await AppAxiosInstance.post('/api/users/register', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password
    });
}

