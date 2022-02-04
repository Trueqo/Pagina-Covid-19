const url = 'https://disease.sh/v3/covid-19/all'

fetch(url)
.then(response => response.json())
.then(data =>{

    let totalC = document.getElementById('totalC')
    totalC.innerHTML = `<h6>${'total Cases'}</h6><p class="totalCC">${data.active}</p>`;

    let activeC = document.getElementById('activeC')
    activeC.innerHTML = `<h6>${'active Cases'}</h6><p class="activeCC">${data.cases}</p>`;

    let recoveredC = document.getElementById('recoveredC')
    recoveredC.innerHTML = `<h6>${'recovered Cases'}</h6><p class="recoveredCC">${data.recovered}</p>`;
    
    let deathsC = document.getElementById('deathsC')
    deathsC.innerHTML = `<h6>${'deaths Cases'}</h6><p class="deathsCC">${data.deaths}</p>`;

    

    
    
})

.catch(err=>console.log('error'))


const topP = 'https://disease.sh/v3/covid-19/countries?sort=cases'

fetch(topP)
.then(response=>response.json())
.then(data =>{

    let topC = document.getElementById('topC')
    for (let i = 0; i <= 9; i++) {
    
    topC.innerHTML += `<div class="pText"><img class="flag paisTOP" src="${data[i].countryInfo.flag}"><h6 class="paisTOP">${data[i].country}</h6> <p class="paisTOP">${data[i].cases}</p></div>`
    

    }
    

})
.catch(err=>console.log('error obteniendo los 10 paises con más casos'))



let lista = 'https://disease.sh/v3/covid-19/countries?sort=case'

fetch(lista)
.then(response=>response.json())
.then(data =>{

    let P1 = document.getElementById('P1')
    let selectPaises = document.getElementById('selectPaises')
    selectPaises.addEventListener('change',(e)=>{

        P1.innerHTML = `<div class="dataCountry"><h6>${'Total Cases'}</h6> <p >${data[selectPaises.value].cases}</p></div>`
        P2.innerHTML = `<div class="dataCountry"><h6>${'Total Recovered'}</h6> <p >${data[selectPaises.value].recovered}</p></div>`
        P3.innerHTML = `<div class="dataCountry"><h6>${'New Cases'}</h6> <p >${data[selectPaises.value].todayCases}</p></div>`
        P4.innerHTML = `<div class="dataCountry"><h6>${'Total Deaths'}</h6> <p >${data[selectPaises.value].deaths}</p></div>`
        P5.innerHTML = `<div class="dataCountry"><h6>${'Total Active'}</h6> <p >${data[selectPaises.value].active}</p></div>`
        P6.innerHTML = `<div class="dataCountry"><h6>${'Total New Deaths'}</h6> <p >${data[selectPaises.value].todayCases}</p></div>`
    
    })
    

    for (let j = 0; j <= data.length; j++) {

        selectPaises.innerHTML += `<option value="${j}">${data[j].country}</option>`
        
    }

})

.catch(err=>console.log('ahhhhhh'))





