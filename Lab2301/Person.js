function Person (name, phone, age) {
    this.name = name;
    this.phone = phone;
    this.age = age;

    this.Show = function(){
        console.log(this.name + ": " + this.phone + "; " + this.age);
    }
}

Person.prototype.Hello = function() {
    console.log("Wassup " + this.name);
}

module.exports = Person;