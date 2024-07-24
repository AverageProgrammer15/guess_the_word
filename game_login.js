function addUser()
{
    P1Name = document.getElementById('player1_name_input').value;
    P2Name = document.getElementById('player2_name_input').value;
    
    localStorage.setItem("player1_name", P1Name);
    localStorage.setItem("player2_name", P1Name);

    window.location.replace("game_page.html");
}