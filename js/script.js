//Selezionare gli elementi del DOM
const eleHelp = document.querySelector('.help');
const eleGrid = document.querySelector ('.grid');
const btnPlay = document.querySelector ('#play');
const selectLevel = document.querySelector ('#level');

let arrMines;
let score;


btnPlay.addEventListener('click', function(){

    //nascondere il messaggio
    eleHelp.classList.add('hidden');

    //mostrare la griglia
    eleGrid.classList.remove('hidden');

    //leggere il livello per determinare il numero di celle
    const nCells = parseInt(selectLevel.value);

    //aggiustare lo style della griglia
    eleGrid.style.setProperty('--sideSquare', Math.sqrt(nCells));

    //generare l'array con le bombe
    arrMines = generateRandomArray(1, nCells, 16 );
   
    //inizializziamo il conteggio
    score = 0;
 
    //generare la griglia
    createGrid(nCells, eleGrid);
});



/*FUNCTION DEFINITIONS*/
function createGrid (nCells, eleContainer){
    console.log(nCells);

    const side = Math.sqrt(nCells);

    //pulisco il container dell'eventuale griglia precedente
    eleContainer.innerHTML = '';

    for (let i = 1; i <= nCells; i++){
        //creiamo una cella e la formattiamo
        const eleCell = document.createElement('div');
        eleCell.innerHTML = i;
        eleCell.classList.add('cell');
        arrMines.include(i) ? eleCell.classList.add('mine-helper') : '';
    
        eleContainer.append(eleCell);
        
        //aggiungere l'event listener alla cella appena creata
        eleCell.addEventListener('click', function(){
            numCell = parseInt(this.innerHTML);
            if (arrMines.includes(numCell)){
                this.classList.add('mine');
                //fermare il gioco
                eleCell.removeEventListener
                //dire il punteggio
                console.log('il punteggio è '+ score)
            }
            
            this.classList.add('clicked');
        });
    }
}


function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArray(min, max, nElements){
    let arr = [];
    for (let i = 0; i < nElements; i++){
        let randomNum;
        do{
            randomNum = getRandomInteger(min, max);
        }while(arr.include(randomNum))

        arr.push(randomNum);
    }

    return arr;
}

function eleClick(){
    const numCell = parseInt(this.innerHTML)
    
}
