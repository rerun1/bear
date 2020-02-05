import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { HungryBear } from './hungrybear.js';


$(document).ready(function(){

  let bear = new HungryBear("wuzzy");

  bear.setHunger();

  function checkLevel(){
    let checkFoodLevel = bear.didYouGetEaten();
    if(checkFoodLevel){
      $("div#dead").show();
    }
  }
  function feedBear(){
    bear.feed();
    $("div#dead").hide();
  }

  setInterval(checkLevel,2000);


  $("button#feedBear").click(function(){
    feedBear();
  });

});
