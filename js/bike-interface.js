import {Bike} from './../js/bike.js';

$(document).ready(function() {
  $('#bikeButton').click(function() {
    let bikeId = $("#bikeId").val();

    let bike = new Bike()
    bike.bikeApi(bikeId);

  });
});
