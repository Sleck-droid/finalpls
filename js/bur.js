const burger_menu= document.querySelector(".burger_menu")
const burger_menu_nav= burger_menu.querySelector(".burger_menu_nav")
burger_menu.addEventListener("click",() =>{
    burger_menu.classList.toggle("burger_menu_active")
})

const modl=document.querySelector(".messageform")
const message=document.querySelector(".msg-active")
message.addEventListener("click",() =>{
    modl.classList.toggle("active")
})

modl.addEventListener("click",e=>{
    if(e.target.classList.contains("messageform")){
        modl.classList.remove("active")
    }

})
