import express from 'express'
import {  formularioRegistro,  crearUsuario, formularioRegistroProducto, crearProducto} from '../controllers/userController.js'

const userRouter = express.Router()


userRouter.get('/registro', formularioRegistro)
userRouter.post('/registro', crearUsuario)
userRouter.get('/registroProducto',formularioRegistroProducto)
userRouter.post('/registroProducto',crearProducto)


export {
  userRouter
}