export const convertDurationToMinSec = (duration) => {
  let minutes = Math.floor(duration / 60),
    seconds_int = duration - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_str.substring(0, 2);
  if (seconds_int < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};
