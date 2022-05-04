const enumerable = {
    1: "CREATED",
    2: "WON",
    3: "LOST"
};

const setState = (number) => {
    let state;
    if (number == 1) {
        state = enumerable[1];
    } else if (number == 2) {
        state = enumerable[2];
    } else if (number == 3) {
        state = enumerable[3];
    }

    return state;
};

module.exports = setState;