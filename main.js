document.addEventListener('DOMContentLoaded', function(){
    const nome = document.getElementById('name');
    const nomeUsuario = document.getElementById('username');
    const avatar = document.getElementById('avatar');
    const repos = document.getElementById('repos');
    const seguidores = document.getElementById('followers');
    const seguindo = document.getElementById('following');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/TRIbuto2020')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            nome.innerText = json.name;
            nomeUsuario.innerText = json.login;
            avatar.src = json.avatar_url;
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            link.href = json.html_url;
            repos.innerText = json.public_repos;
        })
})