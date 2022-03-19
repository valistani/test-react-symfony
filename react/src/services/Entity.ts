
export interface CarEntity{
    id:number
    photo: string;
    mark: string;
    description: string;
    comments: CommentEntity[];
    createdAt: string;
    owner: any;
    refreshCars: Function;
}
export interface UserEntity{
    id:number
    firstName: string;
    lastName: string;
    email?:string;
    createdAt?: string;
}

export interface CommentEntity{
    id:number
    content: string;
    car?: any;
    user?:any;
    createdAt?: string;
}