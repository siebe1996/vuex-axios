export function useFilters() {
    const toDate = function (date) {
        return date.toLocaleString("nl-BE", {
            weekday: "short",
            day: "numeric",
            month: "short",
        });
    };
    const toHour = function (date) {
        return new Date(date).getTime() / 3600000;
    };
    const time = function (date) {
        return date.getHours() + ":" + date.getMinutes();
    }
    const toGhentTime = function (start, end) {
        const localStart = new Date(start);
        let startHour = toHour(localStart) + 1;
        let startDate = new Date(startHour * 3600000);
        if (!end) {
            let dateString = toDate(startDate) + " van " + time(startDate);
            /* return ma 22 jul. om 01:30 */
            return dateString;
        }
        const localEnd = new Date(end);
        let endHour = toHour(localEnd) + 1;
        let endDate = new Date(endHour * 3600000);
        if (localEnd.getDate() === localStart.getDate()) {
            let dateString = toDate(startDate) + " van " + time(startDate) + " tot " + time(endDate);
            /* return ma 22 jul. van 01:30 tot 14:00 */
            return dateString;
        }
        /* return ma 22 jul. om 01:30 tot di 23 jul. om 08:00 */
        let dateString = toDate(startDate) + " om " + time(startDate) + " tot " + toDate(endDate) + " om " + time(endDate);
        return dateString;
    };
    const ellipsis = function (value, end = 150) {
        if (!value) {
            return "...";
        }
        if (value.length < end) {
            return value;
        }
        if (value.length > end) {
            return value.substring(end) + "...";
        } else {
            return "an error occured";
        }
        /*
            indien geen value --> return "…"
            indien value < end --> doe niks, return value
            indien value.length > end --> return substring + "…"
            */
    };
    return {toGhentTime, ellipsis};
}
