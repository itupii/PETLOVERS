import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const petRoute = Router();
const pet = require('../models/pet')

petRoute.get('/pet', async(req: Request, res: Response, next: NextFunction)=>{
    const airplaneList = await pet.findAll();
    res.status(StatusCodes.OK).send(airplaneList)
})


petRoute.get('/pet/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await pet.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            ok: false,
            message: "pet não encontrado!"
        })
    } else {
        return res.json(project)
    }
})

petRoute.post('/pet/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newpet = req.body
    await pet.create(newpet)
    .then((petCriado) =>{
        return res.json({
            id: petCriado.id,
            ok: true,
            message: "pet cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            ok: false,
            message: "pet não cadastrado!"
        })
    })
})

petRoute.put('/pet/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedpet = req.body;
    modifiedpet.uuid = uuid
    await pet.update(modifiedpet, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             ok: true,
             message: "pet atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             ok: false,
             message: "pet não atualizado!"
        })
     })
})


petRoute.delete('/pet/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;


    await pet.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            ok: true,
            message: "pet deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            ok: false,
            message: "pet não deletado!"
        })
    })
})


export default petRoute;