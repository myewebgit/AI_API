
const loadAIs = () => {
  fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayAIs(data)
    );
}
loadAIs();
const displayAIs = data => {
  const ais = data.data.tools;
  // console.log(data.data.tools);
  const aiDiv = document.getElementById('aiHub');
  // for (const ai of ais) {
  //     console.log(ai.name)

  //     const p = document.createElement('p');
  //     p.innerText = `
  //     ${ai.image}
  //     ${ai.id}
  //     Features:
  //     1.${ai.features[1]}
  //     2.${ai.features[2]}
  //     3.${ai.features[3]}

  //     ${ai.name}
  //     ${ai.published_in}

  //     `;

  //     aiDiv.appendChild(p)
  // }
  ais.forEach(ai => {
    // console.log(ai);
    const div = document.createElement('div');
    div.classList.add('ai')
    div.innerHTML = `
    <img  src="${ai.image}">
       <h5> Features:</h5>
        <p> 1.${ai.features[0]} </br>
            2.${ai.features[1]} </br>
            3.${ai.features[2]} </p>
        
        <h3>  ${ai.name}</h3> 
       <h6> ${ai.published_in}</h6>
        <button onClick="loadAIByName('${ai.id}')">&rarr;</button>
        <button onclick="showModal('${ai.id}')">&rarr;</button>
       
    `
    aiDiv.appendChild(div)
  })
}

const loadAIByName = id => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res => res.json())
    .then(data => showModal(data))
}

/////////// Modal ///////////////

var modalWrap = null;
const showModal = (ai) => {
  console.log(ai)
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
<div class="modal" tabindex="-1">

<div class="modal-dialog">
<div class="modal-content">
<button type="button" class="position-absolute top-0 start-100 translate-middle btn-close bg-danger rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
<div class="modal-header">
  <h5 class="modal-title"></h5>
  
 
 
</div>
<div class="modal-body">
  <p>Modal body text goes here.</p>
  <p>${ai}</p>
 
  
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="button" class="btn btn-primary">Save changes</button>
</div>
</div>
</div>
</div>
`;
  document.body.append(modalWrap);
  var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();

}



console.log('js connected')