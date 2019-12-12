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
    return `${Math.floor(min / MIN_CONVERSION.year)} years ago`;
  } else if (min >= MIN_CONVERSION.month) {
    return `${Math.floor(min / MIN_CONVERSION.month)} months ago`;
  } else if (min >= MIN_CONVERSION.week) {
    return `${Math.floor(min / MIN_CONVERSION.week)} weeks ago`;
  }
};