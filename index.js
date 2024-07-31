// const { default: fileDownload } = require("js-file-download");

function myFunction(event) {


    event.preventDefault();

    let Firstname = document.getElementById("floatingInput").value;
    let Lastname = document.getElementById("lastName").value;
    let emaIl = document.getElementById("eMail").value;
    let TextArea = document.getElementById("FloatingtextArea").value;

    console.log("firstName", Firstname);
    console.log("lastName", Lastname);
    console.log("eMail", emaIl);
    console.log("FloatingtextArea", TextArea);

    // Store data in sessionStorage or perform other actions
    sessionStorage.setItem("FirstName", Firstname);
    sessionStorage.setItem("LastName", Lastname);
    sessionStorage.setItem("Email", emaIl);
    sessionStorage.setItem("floatingTextarea", TextArea);


    emailjs.init({
        publicKey: "OVS5GwCfr3lYeiEeQ",
      });

    emailjs.send("service_koons1u", "portfolio_77", {

        to_name: "abubakarusman131220052gmail.com",

        from_name:  emaIl,

        first_name:  Firstname, 
        last_name:  Lastname,
        user_email:  emaIl,
        feedback:  TextArea,
}).then(function() {
    alert("Thank You");
}).catch(function(error) {
    console.error("Error sending email:", error);
    alert("Error sending email");
});
    // Example of another action you might perform here
    // e.g., updating UI, making another API call, etc.
};



// function fileDownload (data, filename) {
//     const file = new file ([data], {type: 'text/pdf'});

//     const downLoad = document.getElementById('download');

//     downLoad.addEventListener('click',  () => {
//         const url = URL.createObjectURL('./files/my resume.pdf', 'type/pdf');
//     })
// }

// // document.getElementById('download').addEventListener('click', curriCulum);


// curriCulum();
