const appendLeadingZeroes = n => {
    if(n <= 9){
        return "0" + n;
    }
    return n
};

export const renderDate = val => {
    if (!val) return;

    const date = new Date(val);
    const formatDate = date.getFullYear() + "-" + appendLeadingZeroes(date.getMonth() + 1) + "-" + appendLeadingZeroes(date.getDate());

    return formatDate;
};

export const renderTime = val => {
    if (!val) return;

    const date = new Date(val);
    const formatTime = appendLeadingZeroes(date.getHours()) + ":" + appendLeadingZeroes(date.getMinutes());

    return formatTime;
};

export const setMintuesToMiliSecond = val => val * 60 * 1000;

export const setDateToUnixTimeStemp = val => new Date(val).valueOf();

