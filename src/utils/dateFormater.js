import dateFormat from "dateformat";

const dateFormater = (date) => {
    return dateFormat(date, `dddd, mmmm d, yyyy  hh:MM TT`);
}

export {dateFormater}