/**
 * Productos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: { type: "string", columnName: "_id" },
    nombre: { type: "string", columnName: "nombre", required: true },
    descripcion: { type: "string", columnName: "descripcion", required: true },
    categoria: { type: "string", columnName: "categoria", required: true },
    precio: { type: "number", columnName: "precio", required: true },
    stock: { type: "number", columnName: "stock", required: true },
    imagenes: {
      type: "json",
      columnType: "array",
      columnName: "imagenes",
      required: true,
    },
    createdAt: { type: "number", autoCreatedAt: true },
    updatedAt: { type: "number", autoUpdatedAt: true },
  },
};
