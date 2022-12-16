import { ICustomerHandlers } from './interface';
import getAll from "./handlers/getAll"





const controllers: ICustomerHandlers = {
    getOne,
    getAll,
    create, 
    update, 
    delete
}

export default controllers;