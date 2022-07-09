//Ngày 1(7/7)
//hàm
document.getElementById("show_menu").addEventListener("click",function(){
    document.querySelector(".mobile").style.transform="translateX(0%)";
    document.querySelector(".overlay").style.display="block";
})
document.getElementById("hiden_menu").addEventListener("click",function(){
    document.querySelector(".mobile").style.transform="translateX(100%)";
    document.querySelector(".overlay").style.display="none";
})
document.getElementById("hiden_menu2").addEventListener("click",function(){
    document.querySelector(".mobile").style.transform="translateX(100%)";
    document.querySelector(".overlay").style.display="none";
})