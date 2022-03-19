import AppAxiosInstance, { getConfig } from "./AxiosInstance";


export const getCars = async () => {
    return await AppAxiosInstance.get('/api/cars');
}


export const addNewCar = async(data:any) => {
    return await AppAxiosInstance.post('/api/cars', {
        photo: data.photo,
        mark: data.mark,
        description: data.description
    },
    getConfig(data.token)
    );
}


export const addNewCommentToCar = async(data:any) => {
    return await AppAxiosInstance.post('/api/cars/' + data.id+'/comment', {
        content: data.content
    },
     getConfig(data.token)
    );
}


