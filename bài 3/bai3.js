//  Bai 3 /////////////////////////////////////////////////////////////////////
var sotienElevnd=document.getElementById("sotienUSD");
var sotienElexuat=document.getElementById("sotienviet");

function sotienDoi(){
    var sotiencandoiEle=sotienElevnd.value;
    var sotienEleduoc= Number(sotiencandoiEle)*23.500;
    console.log("So tien VND doi duoc la:",sotienEleduoc);
    sotienElexuat.innerHTML="Số tiền VND là: "+sotienEleduoc;
}
function thongbao(){
    var sotiencandoiEle=sotienElevnd.value;
    var sotienEleduoc= Number(sotiencandoiEle)*23.500;
    alert("Số tiền VND là: "+sotienEleduoc);
}