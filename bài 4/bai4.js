// Bai 4 //////////////////////////////////////////////////////////////////////
var chieudaiEle=document.getElementById("chieudai");
var chieurongEle=document.getElementById("chieurong");
var chuvichunhatEle=document.getElementById("chuvichunhat");
var dientichchunhatEle=document.getElementById("dientichchunhat");

function chuvi(){
    var chieudaiEle1chuvi=chieudaiEle.value;
    var chieurongEle1chuvi=chieurongEle.value;
    var chuviEle = (Number(chieudaiEle1chuvi)+Number(chieurongEle1chuvi))*2;
    console.log("Chu Vi:",chuviEle);
    chuvichunhatEle.innerHTML="Chu vi hình chữ nhật là: "+chuviEle;
}
function dientich(){
    var chieudaiEle2chuvi=chieudaiEle.value;
    var chieurongEle2chuvi=chieurongEle.value;
    var dientichEle = (Number(chieudaiEle2chuvi)*Number(chieurongEle2chuvi));
    console.log("Dien Tich:",dientichEle);
    dientichchunhatEle.innerHTML="Diện tích hình chữ nhật là: "+dientichEle;
}
function thongbao(){
    var chieudaiEle1chuvi=chieudaiEle.value;
    var chieurongEle1chuvi=chieurongEle.value;
    var chuviEle = (Number(chieudaiEle1chuvi)+Number(chieurongEle1chuvi))*2;
    var chieudaiEle2chuvi=chieudaiEle.value;
    var chieurongEle2chuvi=chieurongEle.value;
    var dientichEle = (Number(chieudaiEle2chuvi)*Number(chieurongEle2chuvi));
    alert("Chu vi hình chữ nhật là: "+chuviEle);
    alert("Diện tích hình chữ nhật là: "+dientichEle);
}