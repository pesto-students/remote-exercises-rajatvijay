const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = MONTH * 12;
const FIVE_SECONDS = 5 * SECOND;

const toSeconds = (ms) => Math.ceil(ms / SECOND);
const toMinutes = (ms) => Math.ceil(ms / MINUTE);
const toHours = (ms) => Math.ceil(ms / HOUR);
const toDays = (ms) => Math.ceil(ms / DAY);
const toWeeks = (ms) => Math.ceil(ms / WEEK);
const toMonths = (ms) => Math.ceil(ms / MONTH);
const toYears = (ms) => Math.ceil(ms / YEAR);

const getTimeString = (unit, time) => (time > 1 ? `${time} ${unit}s ago` : `${time} ${unit} ago`);

function timeWas(time, now = Date.now()) {
  if (time > now) {
    throw new Error('TypeError: Expected a past time!');
  }

  const diff = now - time;

  if (diff < FIVE_SECONDS) {
    return 'just now';
  }

  if (diff < MINUTE) {
    return getTimeString('second', toSeconds(diff));
  }

  if (diff < HOUR) {
    return getTimeString('minute', toMinutes(diff));
  }

  if (diff < DAY) {
    return getTimeString('hour', toHours(diff));
  }

  if (diff < WEEK) {
    return getTimeString('day', toDays(diff));
  }

  if (diff < MONTH) {
    return getTimeString('week', toWeeks(diff));
  }

  if (diff < YEAR) {
    return getTimeString('month', toMonths(diff));
  }

  return getTimeString('year', toYears(diff));
}

export { timeWas };
