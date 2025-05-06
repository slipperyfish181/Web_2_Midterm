function send() {
    event.preventDefault();
    let success_msg = document.getElementById("success_msg");
    let email = document.getElementById("inputEmail").value;
    let fname = document.getElementById("inputFirstName").value;
    let lname = document.getElementById("inputLastName").value;
    let message = document.getElementById("inputMessage").value;
    console.log(email);
    console.log(fname);
    console.log(lname);
    console.log(message);

    
    success_msg.innerHTML = fname + ", your message was sent successfully!"
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputFirstName").value = "";
    document.getElementById("inputLastName").value = "";
    document.getElementById("inputMessage").value = "";
}