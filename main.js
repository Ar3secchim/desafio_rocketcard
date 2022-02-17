function getGitHubProfileInfos() {
    const url = "https://api.github.com/users/Ar3secchim"
  
    fetch(url)
    .then(response => response.json()) //then=promisse é umas promessa que pegar algum valor
    .then(data=> {
      followers.textContent = data.followers 
      following.textContent = data.following
      public_repos.textContent = data.public_repos
      location.textContent = data.location
    })
  }
  getGitHubProfileInfos()
  
  function test(){
    let container = document.getElementById('backgroundCard')
    container.style.backgroundColor= '#'+Math.floor(Math.random()*16777215).toString(16) // a geração de um número aleatório em decimal e é convertido em hexadecimal para gerar o código da cor, de 000000 até FFFFFF
  }
  
  /*ARROW FUNCTIONS
   function nomedafuncao(parametros){
  }
  
   argumento => {     
   Uma função anonima que recebe apenas um argumento sem precisar dar um nome para a função.
   }
  */
  