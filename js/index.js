
form = document.querySelector("#sign-in-form");
form_email = document.querySelector("#sign-in-form-email");
form_password = document.querySelector("#sign-in-form-password");
const body = document.querySelector("body");

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
        email: form_email.value,
        password: form_password.value,
    }

    const ab = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization' `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    })
    const data1 = await ab.json();
    const token = data1.tokens.access
    console.log(token);
    await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization' `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    }).then((response) => {
        if (response.status == 202) {
            Swal.fire(
                '¡Logeado!',
                'Es usuario es correcto',
                'success'
            ).then((result) => {
                console.log(result);
                console.log(response);
                if (result.isConfirmed) {
                    localStorage.setItem('token', `${token}`);
                    window.location.replace("./lista.html");
                }
            })
        }
        else {
            Swal.fire({
                icon: "error",
                title: 'Oops...',
                text: "¡Ocurrió un error!"
            })
        }
    })
});