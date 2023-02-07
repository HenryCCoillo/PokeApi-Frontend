serviciorealizado = document.querySelector('#listaPokemon');
const token = localStorage.getItem('token');
// localStorage.removeItem('token');
console.log(token);
async function getTask() {
    try {
      const response = await fetch(`http://127.0.0.1:8000/pokeapi/v3/`,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/',
        }
      });
      const data = await response.json();
      renderTodo(data)

    } catch (error) {        
      console.log(error);
    }
}

function renderTodo(data) {
    data.results.forEach((task) => {
        serviciorealizado.innerHTML += `
        <tr>
            <td>${task.id}</td>
            <td><a href="card.html?id=${task.name}"style="text-transform: capitalize"; class="nav-link">${task.name}</a></td>
            <td>${task.descripction}</td>
            <td><a href="card.html?id=${task.id}" class="nav-link"><img src="${task.img}" width="100px" alt=""><a/></td>
          </a>
        </tr>
        `;
    });

}
  
getTask();