'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var EngineTest = new Engine();
PalettoTestCase.prototype.testStory1 = function () {

    assertTrue(EngineTest.juxtapositionInit());
};


PalettoTestCase.prototype.testStory2 = function () {

    assertTrue(EngineTest.check_corner('jaune'));
};