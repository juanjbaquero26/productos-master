import { Usuario,Producto } from "../models/UserModel.js";
import { check, validationResult } from "express-validator";



const formularioRegistro = (req, res) => {
  res.render("auth/registro", {
    nombreVista: "Nuevo Usuario",
  });
};



const crearUsuario = async (req, res) => {
  await check("nombre")
    .notEmpty()
    .withMessage("El campo nombre es obligatorio")
    .run(req);
  await check("apellido")
    .notEmpty()
    .withMessage("El campo apellido es obligatorio")
    .run(req);
  await check("correo")
    .isEmail()
    .withMessage("El correo debe llevar un formato valido")
    .run(req);
  await check("documento")
    .notEmpty()
    .isNumeric()
    .withMessage("el docuemnto debe tener minimo 5 caracteres y no estar vacio")
    .run(req);
  await check("direccion")
    .notEmpty()
    .withMessage("la direccion es requerida")
    .run(req);
  await check("telefono")
    .notEmpty()
    .isNumeric()
    .withMessage("debe escribir un numero valido")
    .run(req);
  

  let listadoErrores = validationResult(req);

  if (!listadoErrores.isEmpty()) {
    return res.render("auth/registro", {
      nombreVista: "Nuevo Usuario",
      errores: listadoErrores.array(),
      usuario: {
        nombre: req.body.nombre,
        correo: req.body.correo,
      },
    });
  }
  const { nombre, correo, apellido,documento,direccion,telefono } = req.body;

  const validarUsuario = await Usuario.findOne({ where: { correo } });

  if (validarUsuario) {
    return res.render("auth/registro", {
      nombreVista: "Nuevo Usuario",
      errores: [{ msg: "El correo ya existe en la base de datos" }],
      usuario: {
        nombre: req.body.nombre,
        correo: req.body.correo,
      },
    });
  }

  const usuario = await Usuario.create({
    nombre, correo, apellido,documento,direccion,telefono
  });

  res.render("templates/usuarioCreado", {
    nombreVista: "Confirmacion Usuario",
    mensaje:
      "cliente creado exitosamente",
  });
};

const formularioRegistroProducto = (req, res) => {
  res.render("auth/registroProducto", {
    nombreVista: "Nuevo Producto",
  });
};

const crearProducto = async (req, res) => {
  await check("nombre")
    .notEmpty()
    .withMessage("El campo nombre es obligatorio")
    .run(req);
  await check("referencia")
    .notEmpty()
    .withMessage("El campo referencia es obligatorio")
    .run(req);
  await check("precio")
    .notEmpty()
    .isNumeric()
    .withMessage("el precio debe llenarse y ser numeros")
    .run(req);
  await check("descripcion")
    .notEmpty()
    .withMessage("la descripcion es requerida")
    .run(req);
  await check("cantidad")
    .notEmpty()
    .isNumeric()
    .withMessage("debe escribir un numero valido")
    .run(req);
  

  let listadoErrores = validationResult(req);

  if (!listadoErrores.isEmpty()) {
    return res.render("auth/registroProducto", {
      nombreVista: "Nuevo Producto",
      errores: listadoErrores.array(),
      producto: {
        nombre: req.body.nombre,
        referencia: req.body.referencia,
      },
    });
  }
  const { nombre, precio, referencia,descripcion,cantidad } = req.body;

  const validarProducto = await Producto.findOne({ where: { referencia } });

  if (validarProducto) {
    return res.render("auth/registroProducto", {
      nombreVista: "Nuevo Producto",
      errores: [{ msg: "El producto ya existe en la base de datos" }],
      producto: {
        nombre: req.body.nombre,
        referencia: req.body.referencia,
      },
    });
  }

  const producto = await Producto.create({
    nombre, precio, referencia,descripcion,cantidad
  });

  res.render("templates/usuarioCreado", {
    nombreVista: "Confirmacion producto",
    mensaje:
      "producto creado exitosamente ",
  });
};



export {
  formularioRegistro,
  crearUsuario,
  formularioRegistroProducto,
  crearProducto
};
