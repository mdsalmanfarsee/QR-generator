let input = document.querySelector("#inp");
let btn = document.querySelector(".btn");
let qr = document.querySelector("#qrimg");
let imgbox = document.querySelector(".imgbox");
btn.addEventListener('click', generate);

function generate() {
    if (input.value.length > 0) {
        qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imgbox.classList.add("showqr");
    }
    else {
        input.classList.add('error');
        setTimeout(() => {
            input.classList.remove('error');
        }, 1000);
        //alert("enter something first");

    }

}
