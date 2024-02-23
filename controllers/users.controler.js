import { response, request } from 'express';



export const getUserGet = (req = request, res = response) => {
    
    const {q, nombre = 'no neim', apikey, page, limit} = req.query;

    res.json({
        msg: "get API - controlador = Get",
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

export const getUserPost = (req, res = response) => {
    const {nombre, edad} = req.body; //se desestructura para pedir información especifica. se ignora lo que sea no se pida

    res.json({
        msg: "post API - controlador = post",
        nombre, 
        edad
    });
}

export const getUserPut = (req, res = response) => {
    const {id} = req.params.id;

    res.json({
        msg: "put API - controlador = put",
        id
    });
}

export const getUserPatch = (req, res = response) => {
    
    res.json({
        msg: "patch API - controlador = patch"
    });
}

export const getUserDelete = (req, res = response) => {
    
    res.json({
        msg: "delete API - controlador = delete"
    });
}

