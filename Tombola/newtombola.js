


let listItem = "";

const list = document.querySelector('ul');

let i;
for (i = 1; i <= 90; i++) {
    listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);

}


////////////////////////////////////////////////////////////



const btnestrai = document.querySelector(".estrai");
btnestrai.addEventListener("click", random);

//btnestrai.addEventListener("click", talk);


let estratti = [];

let maxNum = 90;

function random() {
    if (estratti.length === maxNum) {
        alert("fine corsa");
        return;
    }

    randomNumber = Math.floor(Math.random() * (maxNum) + 1);

    if (!estratti.includes(randomNumber)) {

        estratti.push(randomNumber);

        document.querySelector(".num").innerHTML = randomNumber;


        //////////////////////////////////////

        const volume = document.querySelector('.volume');
        const tono = document.querySelector('.tono');


        function talk() {
            text = ` numero ${randomNumber} `;
            const vol = volume.value;
            const ton = tono.value;

            // Sintetizzatore vocale
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.volume = vol;
            utterance.pitch = ton;
            utterance.rate = 1;

            // Facciamo parlare 
            speechSynthesis.speak(utterance);
        }
        talk();


        ////////////////////////////////////////////////////7


        // estratti.sort();
        estratti.sort(function (a, b) { return a - b });
        console.log(estratti);

        // document.querySelector("h4").innerHTML = estratti;....  oppure ecome segue...

        let numeriEstratti = "";
        for (let numero of estratti) {
            numeriEstratti += numero + " - ";
            document.querySelector("h4").innerHTML = numeriEstratti;

        }


        let tabe = document.querySelectorAll("li");
        //console.log(tabe);

        let array = Array.from(tabe);
        console.log(array);

        let mm = "";
        for (z = 0; z < estratti.length; z++) {
            mm = estratti[z];
            //console.log(mm);

            let indice = mm - 1;
            //console.log(array[indice]);

            let colore = array[indice];
            colore.style.background = "red";


        }


    } else {
        random()

    }


}

