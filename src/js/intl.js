// input numb

const input = document.querySelector("#phone");
        const iti = intlTelInput(input, {
            initialCountry: "auto",
            separateDialCode: true,
            geoIpLookup: function(success, failure) {
                fetch("https://ipapi.co/json")
                    .then(response => response.json())
                    .then(data => success(data.country))
                    .catch(failure);
            },
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
            
        });
        
        input.addEventListener("blur", function() {
            const isValid = iti.isValidNumber();
            if (isValid) {
                const number = iti.getNumber();
                console.log("Nomor telepon:", number);
            } else {
                console.log("Nomor tidak valid");
            }
        });