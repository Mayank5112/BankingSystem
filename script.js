
function sendMoney() {
   var senderName = document.getElementById("enterSName").value;
   var reciver = document.getElementById("enterName").value;
   var amaount = document.getElementById("enterAmount").value;
   var transctions = document.getElementById("transaction-history-body");
   const today = new Date().toDateString();
   const num = Math.floor((Math.random() * 10));

   if (num > 3) {
      let li = document.createElement('li');
      li.textContent = `Amount ${amaount} send to ${reciver} by ${senderName} on ${today}`;
      transctions.append(li);
      alert(`Transcation complete`);
   } else {
      alert(`Transaction failed`)
   }
}