// Bai 1  ///////////////////////////////////////////////////
var  tongTienEle=document.getElementById("month");
var xuatTong=document.getElementById("xuattong");

function tongtien(){
    var  sotienEle = tongTienEle.value;
    var a=Number(sotienEle);
    var summOfmoney=a*100000;
    console.log(summOfmoney);
    xuatTong.innerHTML="Lương nhân viên nhận được là: "+summOfmoney;
}
function thongbao(){
    var  sotienEle = tongTienEle.value;
    var a=Number(sotienEle);
    var summOfmoney=a*100000;
    alert("Lương nhân viên nhận được là: "+summOfmoney);
}