document.getElementById("doubtForm").addEventListener("submit", async function(e){
    e.preventDefault();

    document.getElementById("submitBtn").innerText = "Sending...";

    const formData = new FormData(this);

    const scriptURL = "https://script.google.com/macros/s/AKfycbx5Ff1pjKTFiR8SKb0IwVIkcftN9T2DDHs7KdPDjfZEQnpKdfaO8buB5lGcjanVKh6c0g/exec"; // ⚠️ यहाँ अपना backend URL डालना है

    let response = await fetch(scriptURL, {
        method: "POST",
        body: formData
    });

    document.getElementById("responseMsg").innerText = "Thank you! Your doubt has been submited. i'll reply soon. -Mahak";
    document.getElementById("submitBtn").innerText = "Send";

    this.reset();
});
