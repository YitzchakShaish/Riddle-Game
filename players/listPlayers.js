let listOfPlayers = [];

function FindPlayer(namePlayer){
    listOfPlayers.array.forEach(player => {
        let isFind = false;
        if(player.name === namePlayer)
            isFind = true;
            return player;
        if(!isFind){
            listOfPlayers.push(namePlayer);
        }
        
    });
}

export default listOfPlayers;