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

router.get('/productos', getProducts)

router.post('/productos', createNewProduct)//para crear productos

router.get('/productos/count', getTotalProducts)

router.get('/productos/:id', getProductById);//para obtener por id

router.delete('/productos/:id', deleteProductById)//para eliminar

router.put('/productos/:id',  updateProductById)//para actualizar

export default router 