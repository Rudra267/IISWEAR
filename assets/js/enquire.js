  const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const jobOption = document.getElementById("jobOption");

    function sendEmail() {
     if(jobOption){

        if (!nameInput.value || !phoneInput.value || !emailInput.value || !jobOption.value) {
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
                Phone: ${phoneInput.value}
                Email: ${emailInput.value}
                Selected Option: ${jobOption.value}
            `;

            const param = {
                title: "Masterclass Form",
                to_name: "iiSWEAR_Masterclass Form",
                from_name: "iiSWEAR_Customer Service Team",
                message: bodyMessage
            };

             const service_Id = "service_dwlubzp";
            const template_Id = "template_xbo0b1r";

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
     }else{
                if (!nameInput.value || !phoneInput.value || !emailInput.value) {
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
                Phone: ${phoneInput.value}
                Email: ${emailInput.value}
            `;

            const param = {
                title: "Enquire Form",
                to_name: "iiSWEAR_Masterclass Booked",
                from_name: "iiSWEAR_Customer Service Team",
                message: bodyMessage
            };

            const service_Id = "service_dwlubzp";
            const template_Id = "template_xbo0b1r";

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
    }