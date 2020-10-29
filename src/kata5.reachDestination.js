const reachDestination = (distance, speed) => {

const distDivSpeed = distance / speed;
    function eta () {
        return Math.round(distDivSpeed * 2) / 2;
};

return "I should be there in " + eta () + " hours."
};

module.exports = reachDestination;