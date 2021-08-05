function adduser(){
player1name=document.getElementById("player_1_name").value;
player2name=document.getElementById("player_2_name").value;
localStorage.setItem("player_1_name",player1name);
localStorage.setItem("player_2_name",player2name);
window.location="game_pg.html";
}
