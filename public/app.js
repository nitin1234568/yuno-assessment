document.getElementById("payBtn").addEventListener("click", () => {
  
  const card = document.getElementById("card").value;
  const expiry = document.getElementById("expiry").value;
  const cvv = document.getElementById("cvv").value;

  if (!card || !expiry || !cvv || card.length < 16 || cvv.length < 3) {
    alert("Enter valid card details");
    return;
  }

  document.getElementById("payBtn").innerText = "Processing...";

  setTimeout(() => {
    document.getElementById("txnId").innerText = 
      "YUNO-TXN-" + Math.floor(Math.random()*900000+100000);

    document.getElementById("successPopup").classList.add("active");
    document.getElementById("payBtn").innerText = "Pay Securely";
  }, 1500);
});

function closePopup() {
  document.getElementById("successPopup").classList.remove("active");
}
