import { DataTypes } from "sequelize";
import { dataBase } from "../config/dataBase.js";

const Usuario = dataBase.define('usuario', {
  nombre:{
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido:{
    type: DataTypes.STRING,
    allowNull: false
  },
  documento:{
    type: DataTypes.INTEGER,
    allowNull: false
  },   
  correo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion:{
    type: DataTypes.STRING,
    allowNull: false
  }, 
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  
})
const Producto = dataBase.define('producto', {
  nombre:{
    type: DataTypes.STRING,
    allowNull: false
  }, 
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  referencia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cantidad:{
    type: DataTypes.INTEGER,
    allowNull: false
  }, 
  descripcion:{
    type: DataTypes.STRING,
    allowNull: false
  }, 
})

export{
  Usuario,
  Producto
}