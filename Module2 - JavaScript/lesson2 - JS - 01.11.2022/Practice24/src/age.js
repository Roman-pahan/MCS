export function getNextAge(age) {
  let z = Number.parseInt(age, 10) + 1;
  if (isNaN(z)) {
    return (age = 0);
  } else {
    return z;
  }
}
