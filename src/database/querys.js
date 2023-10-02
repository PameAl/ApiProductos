
export const querys = {
    getAllProduct: "SELECT * FROM Productos",
    addNewProduct: "INSERT INTO Productos (Nombre, Descripcion, Cantidad) VALUES (@Nombre, @Descripcion, @Cantidad)",
    getProductById: "SELECT * FROM Productos WHERE id_producto = @id",
    deleteProductById: "DELETE FROM Productos Where id_producto = @id",
    getTotalProducts: "SELECT COUNT(*) FROM Productos",
    updateProductById: "UPDATE Productos SET Nombre = @Nombre, Descripcion = @Descripcion, Cantidad = @Cantidad WHERE id_producto = @id",
}