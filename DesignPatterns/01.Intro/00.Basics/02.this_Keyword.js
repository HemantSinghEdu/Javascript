/*
    The this keyword in javascript points to the current object in which our function is EXECUTED.
    This current object MAY OR MAY NOT be the object which actually DEFINED our function.
*/

var X = function () {
        this.name = 'this name is X';
        this.print = function () {
            $('body').append("<div>"+this.name+"</div>");
        }
}

var Y = function () {
        this.name = 'this name is Y';
}

var x = new X();
var y = new Y();
y.print = x.print; // Copy the getName function from X object into Y object

x.print();    // Outputs 'X'
y.print();    // Outputs 'Y' even though the function is defined inside X
