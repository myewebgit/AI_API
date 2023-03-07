
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
        <button onclick="showModal()">&rarr;</button>
       
    `
    aiDiv.appendChild(div)
  })
}

const loadAIByName = id => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res => res.json())
    .then(data => displayAIDetails(data))
  }

  const displayAIDetails = ai =>{
    const aih = ai.data

    console.log(aih)
    const aiDiv = document.getElementById('ai-details');
    aiDiv.innerHTML = `
    <h5>${aih.id}</h5>
    <h5>${aih.tool_name}</h5>
    <h5>${aih.description}</h5>
    
    <img height="200px" width="300px"  src="${aih.image_link[1]}">
    `
  }




console.log('js connected')