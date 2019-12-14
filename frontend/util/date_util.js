const MIN_CONVERSION = {
  year: 525600,
  month: 43800,
  week: 10080,
  day: 1440,
  hour: 60,
};

export const timeConvert = createdAt => {
  const startDate = new Date(createdAt);
  const endDate = Date.now();
  const min = Math.floor((endDate - startDate) / (1000 * 60));


  if (min >= MIN_CONVERSION.year) {
    const years = Math.floor(min / MIN_CONVERSION.year);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (min >= MIN_CONVERSION.month) {
    const months = Math.floor(min / MIN_CONVERSION.month);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (min >= MIN_CONVERSION.week) {
    const weeks = Math.floor(min / MIN_CONVERSION.week);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (min >= MIN_CONVERSION.day) {
    const days = Math.floor(min / MIN_CONVERSION.day);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (min >= MIN_CONVERSION.hour) {
    const hours = Math.floor(min / MIN_CONVERSION.hour);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    return `${min} minute${min > 1 ? "s" : ""} ago`;
  }
};

export const getDate = createdAt => {
  const date = new Date(createdAt);
  const dateStr = date.toDateString();
  const startIdx = dateStr.indexOf(" ") + 1;
  return dateStr.slice(startIdx);
};