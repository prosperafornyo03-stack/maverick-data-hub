const SUPABASE_URL = "https://vkylgfklycpeemgwjnwn.supabase.co";

const SUPABASE_KEY = "PASTE_YOUR_ANON_KEY_HERE";


function placeOrder(){

const order = {
name: document.getElementById("name").value,
phone: document.getElementById("phone").value,
network: document.getElementById("network").value,
amount: document.getElementById("bundle").value,
status: "Pending"
};


if(order.name === "" || order.phone === ""){
alert("Please enter your name and phone number");
return;
}


fetch(SUPABASE_URL + "/rest/v1/orders",{

method:"POST",

headers:{
"apikey": SUPABASE_KEY,
"Authorization": "Bearer " + SUPABASE_KEY,
"Content-Type":"application/json",
"Prefer":"return=minimal"
},

body: JSON.stringify(order)

})

.then(()=>{

alert("Order placed successfully ✅");

document.getElementById("name").value="";
document.getElementById("phone").value="";

})

.catch(error=>{

alert("Order failed ❌");
console.log(error);

});

}[7/11, 11:35 AM] 𝐌𝐀𝐕𝐄𝐑𝐈𝐂𝐊: 🔌👋 𝐇𝐢! 𝐈'𝐦 𝐌𝐀𝐕𝐄𝐑𝐈𝐂𝐊 😎🔥 𝐀𝐝𝐝 ➕ 𝐦𝐞 𝐟𝐨𝐫 𝐌𝐨𝐫𝐞 𝐕𝐢𝐞𝐰𝐬 👀, 𝐋𝐢𝐧𝐤 𝐅𝐨𝐫 𝐋𝐢𝐧𝐤 🔗🤝, 𝐚𝐧𝐝 𝐥𝐞𝐭'𝐬 𝐠𝐫𝐨𝐰 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫! 📈🚀 𝐈'𝐦 𝐚𝐜𝐭𝐢𝐯𝐞 𝟐𝟒/𝟕 📲, 𝐯𝐞𝐫𝐲 𝐟𝐫𝐢𝐞𝐧𝐝𝐥𝐲 😁❤️, 𝐚𝐥𝐰𝐚𝐲𝐬 𝐫𝐞𝐚𝐝𝐲 𝐭𝐨 𝐬𝐮𝐩𝐩𝐨𝐫𝐭. 🤝💯 𝐋𝐞𝐭'𝐬 𝐭𝐫𝐞𝐧𝐝 📊🔥, 𝐯𝐢𝐛𝐞 😎🎶, 𝐜𝐨𝐧𝐧𝐞𝐜𝐭 🤝, 𝐚𝐧𝐝 𝐡𝐞𝐥𝐩 𝐞𝐚𝐜𝐡 𝐨𝐭𝐡𝐞𝐫 𝐠𝐞𝐭 𝐦𝐨𝐫𝐞 𝐯𝐢𝐞𝐰𝐬! 👀💥

📲 https://wa.me/+233546155096 💚
[7/21, 3:25 PM] 𝐌𝐀𝐕𝐄𝐑𝐈𝐂𝐊: sb_publishable_w83Ndm_xtI_A9O11GEhK-w__TXMWyEk
