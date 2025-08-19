 const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    function sendEmail() {
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `Please fill out all required fields`,
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            const bodyMessage = `
                Name: ${nameInput.value}
                Email: ${emailInput.value}
                Message: ${messageInput.value}
            `;

            const param = {
                title: "Contact Form",
                to_name: "iiSWEAR_Contact Us",
                from_name: "iiSWEAR_Customer Service Team",
                message: bodyMessage
            };

            const service_Id = "service_dwlubzp";   // replace with your EmailJS service ID
            const template_Id = "template_cz1p9be"; // replace with your EmailJS template ID

            emailjs.send(service_Id, template_Id, param)
                .then((res) => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `We will reach out to contact you`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    document.getElementById("contactForm").reset();
                })
                .catch((err) => console.log(err));
        }
    }