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