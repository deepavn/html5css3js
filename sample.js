function checkvalue()
{
    qty = document.getElementById("myQty").getAttribute("value");
    if (qty==null){
        qty = 0;
    }
    
    qty = parseInt(qty) + 5;
    
    document.getElementById("myQty").setAttribute("value", qty);
}
