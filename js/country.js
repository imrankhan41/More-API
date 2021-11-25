const loadCountries = ()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => displayCountry(data))
}
loadCountries()
const displayCountry =countries =>{
    const container = document.getElementById("countries");
    countries.forEach(country =>{
     const div =document.createElement("div");
     div.classList.add("country");
     div.innerHTML = `
     <h3>${country.name}</h3>
     <p>${country.capital}</p>
     <button onclick = "loadCountryByName('${country.name}')">Show details</button>
     `
    //  const p =document.createElement("p");
    //  p.innerText = country.name;
    //  div.appendChild(p);
    //  const h3 = document.createElement("h3");
    //  h3.innerText = country.capital;
    //  div.appendChild(h3);
     container.appendChild(div);

    })
}
const loadCountryByName = name =>{
    const url =`https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaycountryDetails (data[0]))
}

const displaycountryDetails = country =>{
    const countryDiv = document.getElementById("country-details");
    countryDiv.innerHTML= `
    <h5>${country.name}</h5>
    <p>${country.population}</p>
    <img width="200px" src="${country.flag}">
    `;
  
}
