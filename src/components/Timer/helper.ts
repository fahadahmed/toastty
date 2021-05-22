export const formatTime = (timer: number) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${parseInt(minutes) % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  if(parseInt(getHours) === 0) {
    return `${getMinutes} : ${getSeconds}`;
  }
  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};