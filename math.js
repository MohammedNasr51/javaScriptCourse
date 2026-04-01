const PI = 3.14159;

function getCircumference(radius) {
  return 2 * PI * radius;
}
function getArea(radius) {
  return PI * radius ** 2;
}

function getVolume(radius) {
  return (4 / 3) * PI * radius ** 3;
}

export {PI, getCircumference, getArea, getVolume};
