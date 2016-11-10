'use strict';

var Engine = function () {

    var gameBoard = new Array(6);
    gameBoard[0] = ['noir', 'vert', 'blanc', 'bleu', 'rouge', 'blanc'];
    gameBoard[1] = ['jaune', 'blanc', 'vert', 'rouge', 'jaune', 'bleu'];
    gameBoard[2] = ['bleu', 'jaune', 'bleu', 'blanc', 'noir', 'rouge'];
    gameBoard[3] = ['rouge', 'noir', 'rouge', 'vert', 'bleu', 'blanc'];
    gameBoard[4] = ['blanc', 'vert', 'jaune', 'noir', 'jaune', 'vert'];
    gameBoard[5] = ['jaune', 'bleu', 'noir', 'rouge', 'vert', 'noir'];


    this.displayGameBoard = function () {

        for (var i = 0; i < gameBoard.length; i++) {
            console.log(gameBoard[i]);

        }
    }

    this.juxtapositionInit = function (){


        for(var i=0; i<gameBoard.length; i++){
            for(var j=0; j<gameBoard.length; j++){
                if(i!=0 && gameBoard[i][j]==gameBoard[i-1][j]){
                    return false;
                }
                if(i!=5 && gameBoard[i][j]==gameBoard[i+1][j]){
                    return false;
                }
                if(i!=0 && gameBoard[i][j]==gameBoard[i][j-1]){
                    return false;
                }
                if(i!=5 && gameBoard[i][j]==gameBoard[i][j+1]){
                    return false;
                }


            }
        }
        return true;


    }


    this.check_corner = function(marbleColor){

        if (gameBoard[0][0] == marbleColor || gameBoard[0][5] == marbleColor || gameBoard[5][5] == marbleColor || gameBoard[5][0] == marbleColor)
        {
            return true;
        }

      else { return false;}


    }



}