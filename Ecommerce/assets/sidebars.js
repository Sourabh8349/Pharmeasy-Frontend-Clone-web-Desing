// let closePincode = document.querySelector(".close");
// let closeLogin = document.querySelector(".login-close")

// let sidebarLayout = document.querySelector(".sidebar-background");
// let pincodeSidebar = document.querySelector(".pincode-sidebar");
// let loginSidebar = document.querySelector(".login-sidebar");

// closePincode.addEventListener("click", closePincodeSidebar);
// closeLogin.addEventListener("click", closeLoginSidebar);

// document.querySelector("#open_login").addEventListener("click", function(){
//     sidebarLayout.style.display = "block";
//     loginSidebar.style.display = "block";
// })

// function closeLoginSidebar(){
//     sidebarLayout.style.display = "none";
//     loginSidebar.style.display = "none";
// }

// function closePincodeSidebar(){
//     sidebarLayout.style.display = "none";
//     pincodeSidebar.style.display = "none";
// }

// let pincodeForm = document.querySelector(".sidebar-background form");

// pincodeForm.addEventListener("submit", (el)=>{
//     el.preventDefault();
//     if(pincodeForm.pincode.value != ""){
//         console.log(pincodeForm.pincode.value);
//     }
// })

$(document).ready(function(){
    $("#open_login").click(function(){
        // alert($(".sidebar-background").css("display"))
        $(".sidebar-background").css({"display": "block"})
        $(".login-sidebar").css({"display": "block"})
    })
    $(".close").click(function(){
        $(".pincode-sidebar").css({"display": "none"})
        $(".sidebar-background").css({"display": "none"})
    })
    $(".login-close").click(function(){
        $(".sidebar-background").css({"display": "none"})
        $(".login-sidebar").css({"display": "none"})
    })
})