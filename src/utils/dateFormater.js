import dateFormat from "dateformat";

const dateFormater = (date) => {
    return dateFormat(date, `mmmm d, yyyy "at" h:MM`);
}

export {dateFormater}