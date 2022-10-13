exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        success:true,
        message: "En esta ruta ud va a poder ver todos los producto1"
    })
}

exports.getProductById= async (req,res,next)=>{
    const product= await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success:false,
            message:"No encontramos el producto"
        })
    }
    res.status(200).json({
        success:true,
        mensaje:"Aqui debajo encuentras la información de tus productos1, Productos2",
        product
    })
}
