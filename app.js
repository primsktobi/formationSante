    const clas = (nom) => document.querySelector(nom);
    const ident = (nom) => document.getElementById(nom);
    const enSavoireP = ident("btnDivOne");

  enSavoireP.addEventListener("click", () => {
        if (window.innerWidth <= 480) {
            window.scrollTo({ top: 3146, behavior: "smooth" });
        } else if (window.innerWidth > 480 && window.innerWidth <= 1024) {
            window.scrollTo({ top: 2200, behavior: "smooth" });
        } else if (window.innerWidth >= 1280) {
            window.scrollTo({ top: 1974, behavior: "smooth" });
        } else {
            console.log(window.innerWidth);
        }
    });

    const accueil = ident("accueil");
    const fillieres = ident("fillieres");
    const aide = ident("aide");
    const politique = ident("politique");

    const all = (nom) => document.querySelectorAll(nom);
    const transacton = all(".transaction");

  let operateurSelectionne = "";

    transacton.forEach((trans) => {
        trans.addEventListener("click", () => {
            operateurSelectionne = trans.innerText;
            transacton.forEach((tran) => {
                tran.style.filter = "blur(3px)";
            });
            trans.style.filter = "blur(0px)";
        });
    });

    const valider = clas(".valider");
    const recu = clas(".recu");
    const pourContacts = ident("pourContacts");
    const bntcontacts = ident("contactes");
    const supp = clas(".supp");
    const suppTwo = clas(".supp2");
    const infos = all(".infos");
    const nomPre = clas(".nomPre");
    const whats = clas(".whats");
    const transfert = clas(".transfert");
    const times = clas(".time");

    const choixFilliere = ident("choixFilliere");
    const recuOpp = ident("recuOpp");
    const recuNetP = ident("recuNetP");
    const recuW = ident("recuW");
    const recuTrans = ident("recuTrans");
    const recuRe = ident("recuRe");
    const recuFi = ident("recuFi");
    const recuId = ident("recuId");

    valider.addEventListener("click", () => {
        infos.forEach((info) => {
            if (info.value === "") {
                info.classList.add("infor");
                setTimeout(() => {
                    info.classList.remove("infor");
                }, 1000);
            }
        });

        if (nomPre.value !== "" && whats.value !== "" && transfert.value !== "") {
            recu.style.display = "flex";
            recuOpp.innerText = operateurSelectionne || "Non sélectionné";
            recuNetP.innerText = nomPre.value;
            recuW.innerText = "+225 " + whats.value;
            recuTrans.innerText = "+225 " + transfert.value;
            recuFi.innerText = choixFilliere.value;

            if (operateurSelectionne === "MTN") {
                recuRe.innerText = "+225 0595974084";
            } else if (operateurSelectionne === "ORANGE") {
                recuRe.innerText = "+225 0714123547";
            } else if (operateurSelectionne === "MOOV") {
                recuRe.innerText = "+225 0103943396";
            } else {
                recuRe.innerText = "+225 0595974084";
            }

            let temps = new Date();
            let jour = String(temps.getDate()).padStart(2, "0");
            let mois = String(temps.getMonth() + 1).padStart(2, "0");
            let annee = String(temps.getFullYear());
            let heure = String(temps.getHours()).padStart(2, "0");
            let minute = String(temps.getMinutes()).padStart(2, "0");
            let genere = `${jour}/${mois}/${annee} à ${heure}:${minute}`;
            let code = String(choixFilliere.value).slice(0, 3);
            let wh = String(whats.value).slice(7, 10);
            let tr = String(transfert.value).slice(7, 10);
            let np = String(nomPre.value).slice(0, 3);
            recuId.innerText = `FS-${minute}${heure}-${code}${wh}-TR${tr}@${np}`;
            times.innerText = genere;
        }

        supp.addEventListener("click", () => {
            recu.style.display = "none";
        });
    });

    bntcontacts.addEventListener("click", () => {
        pourContacts.style.display = "flex";
    });

    suppTwo.addEventListener("click", () => {
        pourContacts.style.display = "none";
    });

    const inscription = clas(".inscription");
    const connexion = clas(".connexion");
    const niveauInscription = clas(".niveauInscription");
    const niveauPaiement = clas(".niveauPaiement");

    inscription.addEventListener("click", () => {
        niveauInscription.style.display = "flex";
        niveauPaiement.style.display = "none";
        if (window.innerWidth <= 480) {
            window.scrollTo({ top: 3506, behavior: "smooth" });
        }
    });

    connexion.addEventListener("click", () => {
        niveauInscription.style.display = "none";
        niveauPaiement.style.display = "flex";
        if (window.innerWidth <= 480) {
            window.scrollTo({ top: 3506, behavior: "smooth" });
        }
    });

    // ===== FAQ  =====
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
        const btn = item.querySelector(".faq-question");
        btn.addEventListener("click", () => {
            const isOpen = item.classList.contains("open");
            faqItems.forEach((i) => i.classList.remove("open"));
            if (!isOpen) item.classList.add("open");
        });
    });

    // ===== FIREBASE =====
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
    import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

    const firebaseConfig = {
        apiKey: "AIzaSyBdpj467SN0udNjyoBc4fmvl5ts4qev3W4",
        authDomain: "primsone-01.firebaseapp.com",
        projectId: "primsone-01",
        storageBucket: "primsone-01.firebasestorage.app",
        messagingSenderId: "596512957539",
        appId: "1:596512957539:web:1dda3fa118b5c0f4a98456"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    window.enregistrer = async function () {
        const nom = document.getElementById("nom").value.trim();
        const telephone = document.getElementById("telephone").value.trim();
        const email = document.getElementById("email").value.trim();
        const filliere = document.getElementById("chFilliere").value;
        const date = new Date().toLocaleString("fr-FR");

        const loaderOverlay = document.getElementById("loaderOverlay");
        const succesMsg = document.getElementById("succesMsg");

        if (nom !== "" && telephone !== "" && email !== "") {

            
            loaderOverlay.style.display = "flex";
            succesMsg.style.display = "none";

            try {
                //  Firebase
                await addDoc(collection(db, "contacts"), {
                    nom: nom,
                    telephone: "+225 " + telephone,
                    Filliere: filliere,
                    email: email,
                    date: date
                });

               
                await emailjs.send("service_x550dia", "template_ocs4d3o", {
                    nom: nom,
                    telephone: "+225 " + telephone,
                    filliere: filliere,
                    email: email,
                    date: date
                });

                
                loaderOverlay.style.display = "none";
                succesMsg.style.display = "flex";

               
                document.getElementById("nom").value = "";
                document.getElementById("telephone").value = "";
                document.getElementById("email").value = "";

                
                setTimeout(() => {
                    succesMsg.style.display = "none";
                }, 4000);

            } catch (err) {
                loaderOverlay.style.display = "none";
                alert("Une erreur est survenue, veuillez réessayer.");
                console.error(err);
            }

        } else {
            alert("Assurez-vous de remplir toutes les cases, s'il vous plaît");
        }
    };