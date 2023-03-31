export const calculateDaysLeft = (dateOfExpiry) => {
  const expiryDate = new Date(dateOfExpiry);
  const currentDate = new Date();
  const difference = expiryDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return daysLeft;
};

export const views = () => {
  const mathRandom = Math.floor(Math.random() * 40) + 1;
  let views;
  if (mathRandom < 10) {
    views = `0${mathRandom}`;
  } else {
    views = `${mathRandom}`;
  }
  return views;
};

export const date = (dates) => {
  const dateString = `${dates}`;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  return [month, day, year];
};
