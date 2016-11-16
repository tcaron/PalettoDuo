'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var EngineTest = new Engine();
PalettoTestCase.prototype.testStory1 = function () {

    assertTrue(EngineTest.check_juxtaposition());
};


PalettoTestCase.prototype.testStory2 = function () {

    assertTrue(EngineTest.is_in_corner("jaune"));

};



PalettoTestCase.prototype.testStory3 = function () {

    EngineTest.play("jaune");
    assertTrue(EngineTest.get_pieces() == 35);



}


PalettoTestCase.prototype.testStory4 = function(){

    EngineTest.play("noir");
    assertTrue(EngineTest.get_player_pieces(2,"noir") ==2);

    assertTrue(EngineTest.get_pieces() ==  33);


}


var EngineTest2 = new Engine();
PalettoTestCase.prototype.testStory5 = function (){


    EngineTest2.delete_piece(0,0);
    EngineTest2.delete_piece(0,1);
    EngineTest2.delete_piece(0,2);
    EngineTest2.delete_piece(1,0);
    EngineTest2.delete_piece(1,1);
    EngineTest2.delete_piece(1,2);
    EngineTest2.delete_piece(1,5);
    EngineTest2.delete_piece(2,0);
    EngineTest2.delete_piece(2,1);
    EngineTest2.delete_piece(2,5);
    EngineTest2.delete_piece(3,3);
    EngineTest2.delete_piece(3,4);
    EngineTest2.delete_piece(3,5);
    EngineTest2.delete_piece(4,0);
    EngineTest2.delete_piece(4,3);
    EngineTest2.delete_piece(4,4);
    EngineTest2.delete_piece(4,5);
    EngineTest2.delete_piece(5,0);
    EngineTest2.delete_piece(5,1);
    EngineTest2.delete_piece(5,3);
    EngineTest2.delete_piece(5,4);
    EngineTest2.delete_piece(5,5);


    assertTrue(EngineTest2.get_pieces() == 14);
    assertTrue(EngineTest2.getException("bleu"));

}

var EngineTest3 = new Engine();
PalettoTestCase.prototype.testStory6 = function(){

    EngineTest3.delete_piece(0,0);
    EngineTest3.delete_piece(5,5);

    EngineTest3.changePlayer(1);

    EngineTest3.delete_piece(2,0);
    EngineTest3.delete_piece(4,5);
    EngineTest3.delete_piece(5,4);

    EngineTest3.changePlayer(2);

    EngineTest3.delete_piece(0,1);
    EngineTest3.delete_piece(0,5);

    EngineTest3.changePlayer(1);

    EngineTest3.delete_piece(0,2);

    EngineTest3.changePlayer(2);

    EngineTest3.delete_piece(0,4);
    EngineTest3.delete_piece(5,3);
    EngineTest3.delete_piece(5,0);
    EngineTest3.delete_piece(2,0);

    EngineTest3.changePlayer(1);

    EngineTest3.delete_piece(4,0);
    EngineTest3.delete_piece(5,2);
    EngineTest3.delete_piece(3,5);
    EngineTest3.delete_piece(0,3);

    EngineTest3.changePlayer(2);

    EngineTest3.delete_piece(3,2);
    EngineTest3.delete_piece(5,1);
    EngineTest3.delete_piece(1,5);

    EngineTest3.changePlayer(1);

    EngineTest3.delete_piece(1,2);
    EngineTest3.delete_piece(4,1);
    EngineTest3.delete_piece(4,4);

    EngineTest3.changePlayer(2);

    EngineTest3.delete_piece(1,3);
    EngineTest3.delete_piece(2,5);
    EngineTest3.delete_piece(3,4);
    EngineTest3.delete_piece(4,2);

    assertTrue(EngineTest3.getWinner(1));




}

var EngineTest4 = new Engine();
PalettoTestCase.prototype.testStory7 = function() {

    EngineTest3.delete_piece(0,0);
    EngineTest3.delete_piece(5,5);

    EngineTest3.changePlayer(1);

    EngineTest3.delete_piece(0,1);
    EngineTest3.delete_piece(0,5);

    EngineTest3.changePlayer(2);

    EngineTest3.delete_piece(0,4);
    EngineTest3.delete_piece(5,5);

    EngineTest3.changePlayer(1);

    EngineTest3.delete_piece(4,5);
    EngineTest3.delete_piece(1,0);
    EngineTest3.delete_piece(5,4);

    EngineTest3.changePlayer(2);

    EngineTest3.delete_piece(0,2);
    EngineTest3.delete_piece(5,1);

    EngineTest3.changePlayer(1);

    EngineTest3.delete_piece(2,0);
    EngineTest3.delete_piece(5,3);

    EngineTest3.changePlayer(2);

    EngineTest3.delete_piece(4,0);
    EngineTest3.delete_piece(3,5);
    EngineTest3.delete_piece(0,3);
    EngineTest3.delete_piece(5,2);

    EngineTest3.changePlayer(1);

    EngineTest3.delete_piece(3,0);
    EngineTest3.delete_piece(2,5);

    EngineTest3.changePlayer(2);

    EngineTest3.delete_piece(4,1);
    EngineTest3.delete_piece(4,4);

    EngineTest3.changePlayer(1);

    EngineTest3.delete_piece(2,5);
    EngineTest3.delete_piece(3,4);
    EngineTest3.delete_piece(4,2);

    EngineTest3.changePlayer(2);

    EngineTest3.delete_piece(1,4);

    EngineTest3.changePlayer(1);

    EngineTest3.delete_piece(3,1);

    assertTrue(EngineTest4.getWinner(1));

}