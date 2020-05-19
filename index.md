<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Rock Paper Scissors</title>   
</head>
<body>
    <header>
        <img src="images/rps-logo.png" alt="rps-logo" class="title">
    </header>
    <main>
        <h2>Computer Selection</h2>
        <div id="computerselection"></div>

        <div id="container">
            <div id="result"></div>
        </div>
        
        <h2>Player Selection</h2>
        <div id="playerselection">
            <button onclick="rockFunc()" id="rock">
                <img src="images/xrock.png" width="100%">
            </button>
  
            <button onclick="paperFunc()" id="paper">
                <img src="images/xpaper.png" width="100%">
            </button>
            
            <button onclick="scissorsFunc()" id="scissors">
                <img src="images/xscissors.png" width="100%">
            </button>
        </div>  
        <div id="resetcontainer">
            <button onclick="location.reload()" id="reset">
                <img src="images/reset.png" width="100%">
            </button>
        </div>  
    </main>
    <footer>
        <div id="scoreboard">
            <div>
                <div id="labelPlayerScore">Your score</div>
                <div id="playerScore">0</div>
            </div>
            <div>
                <div id="labelComputerScore">Computer Score</div>
                <div id="computerScore">0</div>
            </div>
        </div>
    </footer>
  <script src="index.js"></script>  
</body>
</html>
