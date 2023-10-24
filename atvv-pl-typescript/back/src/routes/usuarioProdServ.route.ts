import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const usuarioProdServRoute = Router();
const usuarioProdServ = require('../models/usuarioProdServ')



usuarioProdServRoute.get('/servprod', async(req: Request, res: Response, next: NextFunction)=>{
    const airplaneList = await usuarioProdServ.findAll();
    res.status(StatusCodes.OK).send(airplaneList)
})


usuarioProdServRoute.get('/servprod/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await usuarioProdServ.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            ok: false,
            message: "usuarioProdServ não encontrado!"
        })
    } else {
        return res.json(project)
    }
})

usuarioProdServRoute.post('/servprod/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newusuarioProdServ = req.body
    await usuarioProdServ.create(newusuarioProdServ)
    .then((usuarioProdServCriado) =>{
        return res.json({
            id: usuarioProdServCriado.id,
            ok: true,
            message: "usuarioProdServ cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            ok: false,
            message: "usuarioProdServ não cadastrado!"
        })
    })
})

usuarioProdServRoute.put('/servprod/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedusuarioProdServ = req.body;
    modifiedusuarioProdServ.uuid = uuid
    await usuarioProdServ.update(modifiedusuarioProdServ, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             ok: true,
             message: "usuarioProdServ atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             ok: false,
             message: "usuarioProdServ não atualizado!"
        })
     })
})


usuarioProdServRoute.delete('/servprod/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;


    await usuarioProdServ.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            ok: true,
            message: "usuarioProdServ deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            ok: false,
            message: "usuarioProdServ não deletado!"
        })
    })
})


export default usuarioProdServRoute;