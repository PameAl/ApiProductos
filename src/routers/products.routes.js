//aqui vamos a guardar las rutas para llamarlas desde otro documento
import {Router} from 'express' 

import { 
    createNewProduct, 
    getProducts, 
    getTotalProducts, 
    getProductById, 
    deleteProductById,
    updateProductById,
 } from '../controllers/products.controller'

const router = Router()

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtiene todos los productos.
 *     description: Obtiene una lista de todos los productos disponibles.
 *     responses:
 *       200:
 *         description: Lista de productos obtenida con éxito.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/productos', getProducts)

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Carga producto.
 *     description: Obtiene la carga de un nuevo producto.
 *     responses:
 *       200:
 *         description: Producto cargado con éxito.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/productos', createNewProduct)//para crear productos

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtiene la cantidad de productos cargados.
 *     description: Obtiene la cantidad de todos los productos disponibles.
 *     responses:
 *       200:
 *         description: Cantidad de productos obtenidas con éxito.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/productos/count', getTotalProducts)

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtiene por id el producto indicado.
 *     description: Obtiene por id el productos disponibles.
 *     responses:
 *       200:
 *         description:  Productos obtenido con éxito.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/productos/:id', getProductById);//para obtener por id

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Elimna el producto indicado.
 *     description: Elimina el producto disponibles.
 *     responses:
 *       200:
 *         description: Producto eliminado con éxito.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete('/productos/:id', deleteProductById)//para eliminar

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Actualiza el producto indicado.
 *     description: Actualiza el productos disponibles.
 *     responses:
 *       200:
 *         description: Producto actualizado con éxito.
 *       500:
 *         description: Error interno del servidor.
 */
router.put('/productos/:id',  updateProductById)//para actualizar

export default router 