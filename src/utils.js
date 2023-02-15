export const isEven = (int) => int % 2 === 0;

export const getRandomInt = (min = 1, max = 100) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};
