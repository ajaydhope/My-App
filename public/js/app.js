angular.module('TestApp', []);
angular.module('TestApp').controller('MainController', cltrlFunc);

function cltrlFunc(){
    this.message = 'Hello';
   /*  this.people = [
        {
             name : 'Ajay1'
        },
        {
            name : 'Ajay2'
       },
       {
             name : 'Ajay3'
       },
    ] */

    this.people = clientPeople;
}