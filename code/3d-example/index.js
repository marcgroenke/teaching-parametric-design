const jscad = require('@jscad/modeling');

const {
  cube,
  sphere,
  cylinder,
  circle,
} = jscad.primitives;

const {
  translate,
  rotate,
  scale,
  center,
  align
} = jscad.transforms;

const {
  union,
  subtract,
  intersect,
  scission
} = jscad.booleans;

const {
  colorize,
  colorNameToRgb
} = jscad.colors;

const size = 40;

const main = () => {
  const cubeShape = cube({
    size: 15
  });
  const sphereShape = sphere({
    radius: 8,
    segments: 80,
    center: [3, 3, 3]
  });

  const colorObject = colorize(
    colorNameToRgb("black"),
    sphereShape,
  );

  const cubes = [];
  
  for (let c = 0; c < 5; c += 1) {
    cubes.push(rotate(
      [0, Math.PI / 60 * c * 10, 0],
      translate(
        [0, c * 20, 0],
        cubeShape
      )
    ));
  }

  const unionShape = subtract([cubeShape, sphereShape])

  return [unionShape, colorObject, cubes];
};

module.exports = { main };