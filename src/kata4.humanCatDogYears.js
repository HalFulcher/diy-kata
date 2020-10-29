const humanCatDogYears = number => {

    const catYears = function () {
    if (number === 1) {
        return 15;
    }
    else if (number === 2) {
    return 24;
    }
    else if (number >= 3) {
    return ((4 * (number - 2)) + 24)
    }
};

const dogYears = function () {

if (number === 1) {
    return 15;
}
else if (number === 2) {
return 24;
}
else if(number >= 3) {
return ((5 * (number - 2)) + 24)
}
}

return [number, catYears, dogYears]

};


module.exports = humanCatDogYears;
