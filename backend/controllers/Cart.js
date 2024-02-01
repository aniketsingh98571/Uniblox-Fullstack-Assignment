let cart=[];
let purchased=[]
let orderCount=0
exports.addCart=(req,res,next)=>{
    const payload=req.body
    console.log(payload.item)
    cart.push(payload.item)
    res.status(200).json({message:"Item Added to Cart"})
}
exports.getCart=(req,res,next)=>{
    res.status(200).json({data:cart})
}
exports.updateCart=(req,res,next)=>{
    const payload=req.body
    if(payload.action==="delete"){
        cart=cart.filter((item)=>{
            return payload.data.id!==item.id
        })
        res.status(200).json({message:"Item Deleted Successfully"})
    }
    else if(payload.action==="update"){
            for(i=cart.length-1;i>=0;i--){
                if(cart[i].id===payload.data.id){
                    cart.splice(i,1,payload.data)
                }
            }
        res.status(200).json({message:"Cart Updated Successfully"})
    }
}
exports.purchaseCart=(req,res,next)=>{
    const payload=req.body
    cart=[]
    orderCount++
    const order={[`Order ${orderCount} `]:payload.order}
    purchased.push(order)
    res.status(200).json({message:"Purchased Confirmed"})
}