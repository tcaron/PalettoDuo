'use strict';

var Engine = function () {


    var board = new Array(6);
    board[0] = new Array("noir","vert","blanc","bleu","rouge","blanc");
    board[1] = new Array("jaune","blanc","vert","rouge","jaune","bleu");
    board[2] = new Array("bleu","jaune","bleu","blanc","noir","rouge");
    board[3] = new Array("rouge","noir","rouge","vert","bleu","blanc");
    board[4] = new Array("blanc","vert","jaune","noir","jaune","vert");
    board[5] = new Array("jaune","bleu","noir","rouge","vert","noir");
    var nbPieces = 36;
    var player=new Array("1","2");
    player["1"]= new Array("jaune" ,"bleu","noir","rouge","vert","blanc");
    player["2"]= new Array("jaune","bleu","noir","rouge","vert","blanc");

    this.set_pieces = function(){


        nbPieces = nbPieces-1;

    };

    this.get_pieces = function(){


        return nbPieces;

    };
    this.get_player_pieces = function(num_player, color){


        return player[num_player][color];

    };


    this.check_juxtaposition = function(){

        for(var x=0; x<board.length; x++){
            for(var y=0; y<board.length; y++){
                if(x!=0 && board[x][y]==board[x-1][y]){
                    return false;
                }
                if(x!=5 && board[x][y]==board[x+1][y]){
                    return false;
                }
                if(y!=0 && board[x][y]==board[x][y-1]){
                    return false;
                }
                if(y!=5 && board[x][y]==board[x][y+1]){
                    return false;
                }


            }
        }
        return true;

    };
    this.is_in_corner = function(color){
        if(board[0][0]== color || board[0][5]== color || board[5][0]== color || board[5][5]== color ){
            return true;
        }


        return false;
    };

    this.add_player_pieces = function(number_player, color, number_pieces){
        if(player[number_player][color]){
            player[number_player][color]+= number_pieces;
        }else{
            player[number_player][color]= number_pieces;
        }

        return player[number_player][color];
    };

    this.delete_piece = function(x,y){
        board[x][y]= undefined;
        nbPieces+= -1;
        return nbPieces;
    };
    this.get_marble_ok = function(){

        var marbles_ok = new Array("noir","vert","blanc","bleu","rouge","blanc","couple_noir","couple_vert","couple_blanc","couple_bleu","couple_rouge","couple_blanc");
        for(var x=0; x<board.length; x++){
            for(var y=0; y<board.length; y++){
                var number_neighbor = 0;
                if(x!=0 && board[x-1][y]!= undefined){
                    number_neighbor += 1;
                }
                if(x!=5 && board[x+1][y] != undefined){
                    number_neighbor += 1;
                }
                if(y!=0 && board[x][y-1] != undefined){
                    number_neighbor += 1;
                }
                if(y!=5 && board[x][y+1] != undefined){
                    number_neighbor += 1;
                }
                if(number_neighbor <= 2){
                    if(marbles_ok[board[x][y]]){
                        marbles_ok[board[x][y]]+=1;
                        marbles_ok["couple_"+board[x][y]]+=","+x+":"+y;
                    }
                    else{
                        marbles_ok[board[x][y]]=1;
                        marbles_ok["couple_"+board[x][y]]=x+":"+y;
                    }
                }


            }
        }
        return marbles_ok;
    };

    this.changePlayer = function (player){

        if (player == 1){

            player = 2;
        }
        else {player = 1;}


    }
    this.play = function(color){

        var marbles_ok = this.get_marble_ok();

        if(marbles_ok[color] != 0){
            this.add_player_pieces(2, color, marbles_ok[color]);
        }
        var marble_select = marbles_ok["couple_"+color].split(",");

        for(var i= 0; i < marble_select.length; i++)
        {
            this.delete_piece(marble_select[i].split(":")[0],marble_select[i].split(":")[1]);
        }

    };

    this.getException = function (color){


        console.log("ERROR IMPOSSIBLE "+color+"");
        return true;

    }

    this.getWinner = function(player){

        console.log('le joueur '+player+' a gagné')
        return true;

    }
};