const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;
const WEEKS = 7 * DAYS;

export const getTimeDifference = (createdAt: Date): string => {
  const now = new Date();
  const diff = Math.abs(now.getTime() - createdAt.getTime());

  if (diff < MINUTES) {
    return `${Math.floor(diff / SECONDS)} seconds ago`;
  } else if (diff < HOURS) {
    return `${Math.floor(diff / MINUTES)} minutes ago`;
  } else if (diff < DAYS) {
    return `${Math.floor(diff / HOURS)} hours ago`;
  } else if (diff < WEEKS) {
    return `${Math.floor(diff / DAYS)} days ago`;
  } else {
    return createdAt.toLocaleDateString();
  }
};
