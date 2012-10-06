// #### JASMINE SRC ####

function Player(name, id) {
    this.name = name;
    this.id = id;
    this.score = "love";
}

function Game(name_player_1, name_player_2) {

    var scoreboard = {
        "start": ["love", "fifteen", "thirty", "forty"],
        "deuce": ["deuce", "advantage"],
        "final": ["loser", "winner"]
    };

    var player_1 = new Player(name_player_1, 1);
    var player_2 = new Player(name_player_2, 2);
    var players = [player_1, player_2];

    var winnerGame = false;

    this.PointTo = function(player) {

        var thisPlayer = players[player];

        //There's already a winner?
        if (!winnerGame) {

            //This player earns some points
            switch (thisPlayer.score) {

                case "love":
                    thisPlayer.score = "fifteen";
                    break;

                case "fifteen":
                    thisPlayer.score = "thirty";
                    break;

                case "thirty":
                    thisPlayer.score = "forty";
                    if (bothHaveSameScore("forty")) convertBothToDeuce();
                    break;

                case "forty":
                    theWinnerIs(thisPlayer);
                    break;

                case "deuce":
                    if (bothHaveSameScore("deuce")) convertToAdvantage(thisPlayer);
                    else convertBothToDeuce();
                    break;

                case "advantage":
                    theWinnerIs(thisPlayer);
                    break;
                default:
                    break;
            }
        }
    };
    var bothHaveSameScore = function(score) {
        return (player_1.score === score && player_2.score === score) ? true : false;
    }
    var convertBothToDeuce = function() {
        player_1.score = "deuce";
        player_2.score = "deuce";
    }
    var convertToAdvantage = function(player) {
        player.score = "advantage";
    }
    this.ScoreOf = function(player) {
        return players[player].score;
    };
    var theWinnerIs = function(player) {
        if (player.id === 1) {
            player_1.score = "winner";
            player_2.score = "loser";
            winnerGame = player_1.id;
        } else {
            player_1.score = "loser";
            player_2.score = "winner";
            winnerGame = player_2.id;
        }
    }
}