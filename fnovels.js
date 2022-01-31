window.desktopcheck = function() {
    var check = false;
        
     if(window.innerWidth>800){
        check=true;
     }
     return check;
}
if(window.desktopcheck()){
    document.getElementsByTagName("body")[0].style.display = "none";
    alert("Webpage does not support wider screen more than 800 pixels!\nPlease come back later...");
}
document.querySelector(".f-navbar-btn").addEventListener("click",function(){
  
  if(document.querySelector(".f-navbar-content").style.display==="block"){
    document.querySelector(".f-navbar-content").style.display="none";
  }else{
    document.querySelector(".f-navbar-content").style.display="block";
  }
  
});
let epubFile = document.querySelector(".epub-file");
let pdfFile = document.querySelector(".pdf-file");
document.querySelector(".epub").addEventListener("click",function(){
  pdfFile.style.display = "none";
  epubFile.style.display = "block";
});
document.querySelector(".pdf").addEventListener("click",function(){
  epubFile.style.display = "none";
  pdfFile.style.display = "block";
});
