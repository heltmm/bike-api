export class Bike {

  bikeById(id) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://bikeindex.org:443/api/v3/bikes/${id}`;
      console.log(url);
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.response));
        }
      };

      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      let keys = Object.keys(body.bike);

      $("#output").html(`<h2>${body.bike.title}</h2>`);
      }, function(error) {
        console.log(error);
        $("#error").html(`<h2>${error}</h2>`);
    });
  }
  bikeBySearch(search) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&query=${search}&location=IP&distance=10&stolenness=stolen`;
      console.log(url);
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.response));
        }
      };

      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      body.bikes.forEach(function(bike){
        $("#output").append(`<h2>${bike.title}</h2>`);
      });
      $('#patient').html("");
      }, function(error) {
        console.log(error);
        $("#error").html(`<h2>${error.message}</h2>`);
    });
  }
}
