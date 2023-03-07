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
  const aih = ai.data;
  console.log(aih)
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `

  <div class="modal" tabindex="1">
  <div class="modal-dialog">
      <div class="modal-content">
          <button type="button"
              class="position-absolute top-0 start-100 translate-middle btn-close bg-danger rounded-circle"
              data-bs-dismiss="modal" aria-label="Close"></button>
          
          <div class="modal-body">
              <div class="row row-cols-1 ">
                  <div class="col">
                      <div class="card">
                          <img src="${aih.image_link[0]}" class="card-img-top" alt="...">
                          <div class="card-body">
                              <h5 class="card-title my-3 p-3">${aih.description}</h5>
                              <div class="card-group">
                                  <div class="card bg-info">
                                      <div class="card-body">
                                          <small class="text-white"> ${aih.pricing[0].price} </small>
                                      </div>
                                  </div>
                                  <div class="card bg-info mx-1">
                                      <div class="card-body">
                                          <small class="text-white"> ${aih.pricing[1].price} </small>
                                      </div>
                                  </div>
                                  <div class="card bg-info ">
                                      <div class="card-body">
                                          <small class="text-white "> ${aih.pricing[2].price} </small>
                                      </div>
                                  </div>
                              </div>
                              <div class="row row-cols-1 row-cols-md-2 mt-2 g-2">
                                  <div class="col">
                                      <div class="card text-white bg-secondary bg-gradient">
                                          <div class="card-body">
                                             
                                              <h6>Features</h6>
                                              <small> 1.${aih.features[1].feature_name}</br>
                                                  2.${aih.features[2].feature_name}</br>
                                                  3.${aih.features[2].feature_name}</small>
                                          
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col">
                                      <div class="card text-white bg-secondary bg-gradient">
                                          <div class="card-body">
                                              
                                              <h6>Integrations:</h6>
                                              <small>1.${aih.integrations[0]}</br>
                                                  2.${aih.integrations[1]}</br>
                                                  3.${aih.integrations[2]}</small>
                                             
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
`;
  document.body.append(modalWrap);
  var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();

}