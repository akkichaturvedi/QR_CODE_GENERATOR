const maincontainer = document.querySelector(".main_Container"),
getbtn = maincontainer.querySelector(".form button"),
qrvalue = maincontainer.querySelector(".form input"),
qrimg = maincontainer.querySelector(".qr-code img");

getbtn.addEventListener("click" , () => {
    value = qrvalue.value;
    // console.log(value);
    if(!value) return; // if input is not given than classlist not work until that not field
    getbtn.innerTEXT = "Generating Qr code...";
    qrimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value} `;
    // console.log("I am clicked..");
    qrimg.addEventListener("load" , () => {
        maincontainer.classList.add("active"); // adding a classlist to show a qr image
        getbtn.innerTEXT = "Generating Qr code...";
    });
});

qrvalue.addEventListener("keyup" , () => {
    if(!qrvalue.value){
    maincontainer.classList.remove("active"); // removing a classlist to show a qr imag
    }
})



