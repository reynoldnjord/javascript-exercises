const getTheTitles = function(obj) {
    let array = [];
    for (el in obj){
        array.push(el.title);
    }
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
