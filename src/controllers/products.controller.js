import { getConnection, sql, querys } from '../database'; // Asegúrate de importar sql y getConnection desde el archivo de conexión

export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(querys.getAllProduct);
    
        res.json(result.recordsets);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const createNewProduct = async (req, res) => {
    const {Nombre, Descripcion} = req.body;
    let { Cantidad } = req.body;

    if( !Nombre || !Descripcion){
        return res.status(400).json({msg:'Importante! Llena todo los campos'})
    }

    if (Cantidad == null) Cantidad = 0;

    try{
        const pool = await getConnection();
    
        await pool.request()
        .input("Nombre", sql.VarChar, Nombre)
        .input("Descripcion", sql.VarChar, Descripcion)
        .input("Cantidad", sql.Int, Cantidad)
        .query(querys.addNewProduct);

        res.json({Nombre, Descripcion, Cantidad});
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }  
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params; // El parámetro se llama 'id', no 'id_producto'
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("id", sql.Int, id) // Usamos 'id' como parámetro
            .query(querys.getProductById); // Consulta SQL para obtener el producto

        if (result.recordset.length === 0) {
            // Si no se encuentra ningún producto con ese ID, devolvemos un mensaje de error
            res.status(404).send("Producto no encontrado");
        } else {
            res.status(200).send(result.recordset[0]);
        }
    } catch (error) {
        res.status(500).send("Error al obtener el producto");
    }
};

export const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params; // El parámetro se llama 'id', no 'id_producto'
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("id", sql.Int, id) // Usamos 'id' como parámetro
            .query(querys.deleteProductById); // Consulta SQL para obtener el producto

        if (result.recordset.length === 0) {
            // Si no se encuentra ningún producto con ese ID, devolvemos un mensaje de error
            res.status(404).send("Producto no encontrado");
        } else {
            res.status(200).send(result.recordset[0]);
        }
    } catch (error) {
        res.status(500).send("Producto eliminado");
    }
};


export const getTotalProducts = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(querys.getTotalProducts);
    
    res.json(result.recordset[0][''])
};

export const updateProductById = async (req, res) => {
    try {
        const { Nombre, Descripcion, Cantidad } = req.body;
        const { id } = req.params;

        if (!Nombre || !Descripcion || Cantidad === undefined) {
            return res.status(400).json({ msg: "Campos requeridos incompletos" });
        }

        const pool = await getConnection();
        const result = await pool
        
            .request()
            .input("Nombre", sql.VarChar, Nombre)
            .input("Descripcion", sql.VarChar, Descripcion)
            .input("Cantidad", sql.Int, Cantidad)
            .input("id", sql.Int, id)
            .query(querys.updateProductById);

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ msg: "Producto no encontrado" });
        }

        res.status(200).json({ Nombre, Descripcion, Cantidad });
    } catch (error) {
        res.status(500).json({ msg: "Error en la actualización del producto" });
    }
};