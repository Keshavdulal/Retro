document.addEventListener('DOMContentLoaded',()=>{

    const tiles=[
        {
            name:'☠️'
        },
        {
            name:'☠️'
        },
        {
            name:'💍'
        },
        {
            name:'💍'
        },
        {
            name:'🧢'
        },
        {
            name:'🧢'
        },
        {
            name:'🎩'
        },
        {
            name:'🎩'
        },
        {
            name:'🍄'
        },
        {
            name:'🍄'
        },
        {
            name:'🌈'
        },
        {
            name:'🌈'
        },
        {
            name:'🔥'
        },
        {
            name:'🔥'
        },
        {
            name:'❄️'
        },
        {
            name:'❄️'
        },
    ];

    // inefficeient sort
    tiles.sort(()=> 0.5-Math.random());

    const grid = document.querySelector(".grid");
    const gridSize = 16

    let selectedTilesId=[];
    let selectedTilesName=[];
    let tilesWon=[];
    let totalClicks=0;
    let totalScore=0;

    const totalClickElem = document.getElementById("clicks");
    const totalScoreElem = document.getElementById("score");

    function createBoard(){
        for(let i=0; i<gridSize; i++){
            let tile = document.createElement('span');
            tile.setAttribute("id",i);
            tile.setAttribute("data-id",i);
            tile.addEventListener('click',flipTile)
            grid.appendChild(tile);
        }   
    }
        
    function flipTile(event){
        totalClicks++;
        totalClickElem.textContent=totalClicks;

        let id =event.target.dataset.id;
        
        selectedTilesId.push(id);
        selectedTilesName.push(tiles[id].name);
        this.textContent=tiles[id].name;
        document.getElementById(id).textContent=tiles[id].name;
        // this.textContent=tiles[id].name;

        // if 2 tiles are selected -> checkformatch
        if(selectedTilesName.length == 2){
            setTimeout(checkForMatch(selectedTilesId),5000);
            selectedTilesId=[];
            selectedTilesName=[];
        }

    }

    function checkForMatch(selectedTilesID){
        let tiles = document.querySelectorAll('span');
        const id0 = selectedTilesID[0];
        const id1 = selectedTilesID[1];
        
        if(selectedTilesName[0] === selectedTilesName[1]){
            setTimeout(()=>{
                tiles[id0].textContent="X";
                tiles[id1].textContent="X";
            },500);
            tilesWon.push(selectedTilesName);
            // totalScore++;
            // totalScoreElem.textContent=totalScore;
        }else{
            setTimeout(()=>{
                tiles[id0].textContent="";
                tiles[id1].textContent="";
            },500);
        }

        if(tilesWon.length == tiles.length/2 ){
            setTimeout(() => {
                alert('You Won');
            },1000);
        }

    }

    createBoard();
});