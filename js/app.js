

  const btnElement = document.querySelector('#main input[type="button"]')
  console.log(btnElement)

    btnElement.addEventListener('click', function() {
    console.log('applica modifiche')

    const NomeCognome = document.getElementById('name')
    console.log(NomeCognome)
    
    const numKm = document.getElementById('kilom')
    console.log(numKm)
    
    const priceKm = parseFloat(("0.21"))
    console.log(priceKm)
    
    const EtaDeiPasseggeri = document.getElementById('etapasseggeri')
    console.log(EtaDeiPasseggeri)

//     const EtaDeiPasseggeri = document.querySelector('#main select[name="eta"]')
//     console.log(btnElement)


//    let novall = EtaDeiPasseggeri.value
//    console.log(EtaDeiPasseggeri.value)


    const nessunValore = document.getElementById('noval')
    console.log(nessunValore)

    const giovani = document.getElementById('youg')
    console.log(giovani)

    const adulti = document.getElementById('adult')
    console.log(adulti)

    const anziani = document.getElementById('old')
    console.log(anziani)


    // let etaPasseggeri = EtaDeiPasseggeri.value
    // console.log(etaPasseggeri.value)

    // let etagiovani = giovani.value
    // console.log(etagiovani.value)

    // let  etaAdulti = adulti.value
    // console.log(etaAdulti.value)

    // let  etaAnziani = anziani.value
    // console.log(etaAnziani.value)
    
    let addKilom = numKm.value
    console.log(addKilom)



  

    // let totPrice = addKilom * priceKm
    // console.log(totPrice)


    if (nessunValore) {
        priceTicket.innerHTML =  '0' + '€'
        console.log(priceTicket)
    }


    else if (giovani) {
        const yougScount = totalPriceFs * 0.20
        console.log(yougScount)
        priceTicket.innerHTML =  (totalPriceFs - yougScount) + '€'
        console.log(priceTicket)
    }


    else if (adulti){
        const oldScount = totalPriceFs * 0.40
        console.log(oldScount)
        priceTicket.innerHTML =  (totalPriceFs - oldScount) + '€'
        console.log(totPrice - oldScount)
    }
    
    else {
        
        priceTicket.innerHTML =  (totalPriceFs) + '€'
        console.log(priceTicket)
    }
   
    

})


const priceTicket = document.getElementById('costo_biglietto')
console.log(priceTicket)