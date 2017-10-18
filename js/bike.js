export class Bike {
  bikeApi(id) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://bikeindex.org:443/api/v3/bikes/${id}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      $("#output").html(`<ul><li>${body.bike.title}</li><li>${body.bike.serial}</li><ul>`);
      }, function(error) {
      return error.message;
    });
  }
}
