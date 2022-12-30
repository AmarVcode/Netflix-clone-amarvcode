
function showdata(i){
let e=document.getElementById(i)
    if(e.classList.contains("qnafter")===false){
        e.classList.add("qnafter")
    }
    else{
        e.classList.remove("qnafter")
    }
}