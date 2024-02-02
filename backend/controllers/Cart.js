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
        const originalCartLength = cart.length;
         cart = cart.filter((item) => {
            return payload.data.id !== item.id;
        });
        
        if (cart.length < originalCartLength) {
            res.status(200).json({message: "Item Deleted Successfully"});
        } else {
            res.status(400).json({message: "Item not found in cart"});
        }
    }
    else if(payload.action==="update"){
        let itemUpdated = false;
        for(let i = cart.length - 1; i >= 0; i--){
            if(cart[i].id === payload.data.id){
                cart.splice(i, 1, payload.data);
                itemUpdated = true;
                break;
            }
        }
        if(itemUpdated) {
            res.status(200).json({message: "Cart Updated Successfully"});
        } else {
            res.status(400).json({message: "Item not found in cart"});
        }
    }
}
exports.purchaseCart=(req,res,next)=>{
    const payload=req.body
    console.log(payload)
    cart=[]
    // orderCount++
    // const order={[`Order ${orderCount} `]:payload}
    purchased.push(payload)
    res.status(200).json({message:"Purchased Confirmed"})
}
exports.getPurchaseItems=()=>{
    return purchased
}