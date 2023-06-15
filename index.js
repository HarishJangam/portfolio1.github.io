console.log("hi");
document.querySelector(".cros").style.display='none';
document.querySelector(".hamburg").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo")
    if(document.querySelector(".sidebar").classList.contains("sidebarGo") ){
        document.querySelector(".dot").style.display='inline';
        document.querySelector(".cros").style.display='none';

    }
    else{
        document.querySelector(".dot").style.display='none';
        setTimeout(()=>{
            document.querySelector(".cros").style.display='inline';
        },350)
        

    }
})