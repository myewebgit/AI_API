
const loadCountries = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayCountries(data)
        );
}

const displayCountries = data => {
    const ais = data.data.tools;
    console.log(data.data.tools);

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
 ais.forEach(ai =>{
    // console.log(ai);
    const div = document.createElement('div');
    div.classList.add('ai')
    div.innerHTML = `
    ${ai.image}
      <h3>  ${ai.id}</h3>
       <h5> Features:</h5>
        <p> 1.${ai.features[0]} </p>
        <p> 2.${ai.features[1]} </p>
        <p> 3.${ai.features[2]} </p>
        
        <h3>  ${ai.name}</h3> 
       <h6> ${ai.published_in}</h6>
        <button onClick="loadAIByName('${ai.id}')">Details</button>
       
    `
    aiDiv.appendChild(div)
 })
}

const loadAIByName = id =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/01}`
}

loadCountries();
console.log('js connected')