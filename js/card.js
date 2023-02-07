serviciorealizado = document.querySelector('.flex');
const id = new URLSearchParams(window.location.search).get("id");
const token = localStorage.getItem('token');
async function getTask() {
    try {
      const response = await fetch(`http://127.0.0.1:8000/pokeapi/v3/${id}/`,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/',
        }
      });
      const data = await response.json();
      console.log(data);
      renderTodo(data);
      

    } catch (error) {        
      console.log(error);
    }
}

function renderTodo(data) {
    serviciorealizado.innerHTML += `
    <article class="card">
        <img src="./a-svg.svg" alt="imagen header card" class="card-header">
        <div class="card-body" style="border-top: 8px solid #000;">
            <img src="${data.img}" alt="imagen de vitoko" class="card-body-img" style="border: 8px solid #000;">
            <h1 class="card-body-title">${data.name} <span>${data.hp} hp</span></h1>
            <p class="card-body-text">${data.descripction}</p>
        </div>
        <div class="card-footer">
            <div class="card-footer-social">
                <h3>${data.attack}</h3>
                <p>Ataque</p>
            </div>
            <div class="card-footer-social">
                <h3>${data.special_attack}</h3>
                <p>Ataque Especial</p>
            </div>
            <div class="card-footer-social">
                <h3>${data.defense}</h3>
                <p>Defensa</p>
            </div>
            <div class="card-footer-social">
                <h3>${data.special_defense}</h3>
                <p>Especial Defensa</p>
            </div>
            <div class="card-footer-social">
            <h3>${data.speed}</h3>
            <p>Velocidad</p>
        </div>
        </div>
    </article>
    `;

}
  
getTask();