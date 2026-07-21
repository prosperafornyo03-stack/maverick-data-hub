function submitOrder(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let network = document.getElementById("network").value;
let bundle = document.getElementById("bundle").value;
let payment = document.getElementById("payment").value;

let message = document.getElementById("message");


if(name=="" || phone=="" || payment==""){
    message.innerHTML="❌ Please fill all details";
    message.style.color="red";
    return;
}


message.innerHTML =
"✅ Order received! We will process your data bundle shortly.";

message.style.color="green";


console.log({
name:name,
phone:phone,
network:network,
bundle:bundle,
payment:payment
});

}
