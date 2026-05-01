





// ************ Sur phone ****************
const clas = (nom) => document.querySelector(nom);
const ident = (nom) => document.getElementById(nom);
const enSavoireP = clas(".btnDivOne")
enSavoireP.addEventListener("click", ()=> {
    if(window.innerWidth <= 480){
        window.scrollTo({
        top: 3146,
        behavior: "smooth"
    })
    }  else if(window.innerWidth <= 1024 && window.innerWidth <= 1270){
        window.scrollTo({
            top: 2200,
            behavior: "smooth"
        })
    }
    else if(window.innerWidth >= 1280 ){
        window.scrollTo({
            top: 1974,
            behavior: "smooth"
        })
    }
   
    else {console.log(window.innerWidth)}

   
})

const all = (nom) => document.querySelectorAll(nom);
const transacton = all(".transaction");

transacton.forEach((trans)=>{
    trans.addEventListener("click", ()=>{
        let opperateur = trans.innerText
        localStorage.setItem("opperateur", opperateur)
        transacton.forEach((tran) => {
            tran.style.filter = "blur(3px)";
            trans.style.filter = "blur(0px)";
        })
    })
})

const valider = clas(".valider");
const recu = clas(".recu");
const supp = clas(".supp");
const infos = all(".infos");
const nomPre = clas(".nomPre")
const whats = clas(".whats")
const transfert = clas(".transfert")
const times = clas(".time")

const choixFilliere = ident("choixFilliere")
const recuOpp = ident("recuOpp")
const recuNetP = ident("recuNetP")
const recuW = ident("recuW")
const recuTrans = ident("recuTrans")
const recuRe = ident("recuRe")
const recuFi = ident("recuFi")
const recuId = ident("recuId")

//    VALIDER ************
valider.addEventListener("click", ()=> {
    infos.forEach((info) =>{
        if(info.value === ""){
            setInterval(() => {
                info.classList.add("infor")
            })
        } 
        info.classList.remove("infor")
    })

    if(nomPre.value !== "" &&  whats.value !== "" && transfert.value !== "" ){
        recu.style.display ="flex"
        let stockOpp = localStorage.getItem("opperateur")
           recuOpp.innerText =  stockOpp; 
           recuNetP.innerText =  nomPre.value;
           recuW.innerText = "+225 " + whats.value;
           recuTrans.innerText ="+225 " +   transfert.value;
           recuFi.innerText =  choixFilliere.value;
           if(stockOpp ==="MTN"){
            recuRe.innerText =  "+225 0595974084";
           } else if(stockOpp === "ORANGE"){
            recuRe.innerText =  "+225 0714123547";
           }else if(stockOpp === "MOOV"){
            recuRe.innerText =  "+225 0103943396";
           } else{recuRe.innerText = "0595974084"}
           let temps = new Date();
             let jour = String(temps.getDate()).padStart(2, "0")
             let mois = String(temps.getMonth() + 1).padStart(2 ,"0")
             let annee = String(temps.getFullYear())
             let heure = String(temps.getHours()).padStart(2 , "0")
             let minute = String(temps.getMinutes()).padStart(2, "0")
             let genere = `${jour}/${mois}/${annee} à ${heure}:${minute}`
             let code = String(choixFilliere.value).slice(0 , 3)
             let wh = String(whats.value).slice(7, 10)
             let tr = String(transfert.value).slice(7, 10)
             let np = String(nomPre.value).slice(0, 3)
    recuId.innerText = `FS-${minute}${heure}-${code}${wh}-TR${tr}@${np}`;
           times.innerText = genere
        }
    
    
})

const btn = clas(".btn")
supp.addEventListener("click", ()=>{
    recu.style.display ="none"
    
})