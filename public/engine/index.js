async function intializeLogin() {
    var email = document.getElementById('emailLogin').value
    var senha = document.getElementById('senhaLogin').value
    try {
        const response = await fetch('./engine/user.json')
        const users = await response.json()
        const userValided = users.find(u =>
            u.email === email
            &&
            u.password === senha
        )

        if (userValided) {
            localStorage.setItem('usuarioAtual', userValided)
            console.log(userValided.email)
            setTimeout(() => {
                window.location.href = './dashboard.html'
            }, 3000);
        } else {
            alert('Erro ao processar o login, verifique os dados')
        }
    } catch (e) {
        console.error('Erro ao buscar os dados:', e)
    }
}