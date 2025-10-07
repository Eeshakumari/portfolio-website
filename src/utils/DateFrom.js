export const DateFrom = (date) => {
  var currentDate = new Date();
  var birthDate = new Date(date);
  var yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
  var monthsDiff = currentDate.getMonth() - birthDate.getMonth();

  if (currentDate.getDate() < birthDate.getDate()) {
    monthsDiff--;
  }

  if (monthsDiff < 0) {
    yearsDiff--;
    monthsDiff += 12;
  }

  return {
    years: yearsDiff,
    months: monthsDiff,
  };
};
