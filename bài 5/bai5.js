// Bai 5 /////////////////////////////////////////////////////////////////////////
var chusoElestr=document.getElementById("chuso");
var xuatsoEle=document.getElementById("xuatso");
// Math.floor: lam tron xuong.
function tonghaiso(){
    var chusoElenum=chusoElestr.value;
    var sumEle = (Number(chusoElenum)%10)+(Math.floor(Number(chusoElenum)/10));
    console.log("Tong hai so la:",sumEle);
    xuatsoEle.innerHTML="Tổng hai chữ số là: "+sumEle;
}
function thongbao(){
    var chusoElenum=chusoElestr.value;
    var sumEle = (Number(chusoElenum)%10)+(Math.floor(Number(chusoElenum)/10));
    alert("Tổng hai chữ số là: "+sumEle)
}