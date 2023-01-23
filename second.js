let time = new Date();
module.exports.date = time;

module.exports.getAll = function(name){
    let hours = time.getHours();
    if (hours < 12) {
        return "Gm " + name;
    }
    else {
        return "Gn " + name;
    }
}