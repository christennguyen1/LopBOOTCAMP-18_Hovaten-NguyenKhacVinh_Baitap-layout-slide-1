//  Bai 2  //////////////////////////////////////////////////////////////
var numberElestr1=document.getElementById("numberEle1");
var numberElestr2=document.getElementById("numberEle2");
var numberElestr3=document.getElementById("numberEle3");
var numberElestr4=document.getElementById("numberEle4");
var numberElestr5=document.getElementById("numberEle5");
var xuattongso = document.getElementById("xuattongso");
function sumOF5number(){
    var numberElenum1=numberElestr1.value;
    var numberElenum2=numberElestr2.value;
    var numberElenum3=numberElestr3.value;
    var numberElenum4=numberElestr4.value;
    var numberElenum5=numberElestr5.value;
    var sumOfnumber=(Number(numberElenum1)+Number(numberElenum2)+Number(numberElenum3)+Number(numberElenum4)+Number(numberElenum5))/5;
    console.log(sumOfnumber);
    xuattongso.innerHTML="Trung bình cộng 5 số là: "+sumOfnumber;
}
function thongbao(){
    var numberElenum1=numberElestr1.value;
    var numberElenum2=numberElestr2.value;
    var numberElenum3=numberElestr3.value;
    var numberElenum4=numberElestr4.value;
    var numberElenum5=numberElestr5.value;
    var sumOfnumber=(Number(numberElenum1)+Number(numberElenum2)+Number(numberElenum3)+Number(numberElenum4)+Number(numberElenum5))/5;
    alert("Trung bình cộng 5 số là: "+sumOfnumber);
}