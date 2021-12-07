const jscad = require("@jscad/modeling");

const {colorize, colorNameToRgb} = jscad.colors;

const {
  circle,
} = jscad.primitives;

const {
  extrudeRectangular,
  extrudeLinear,
  extrudeRotate,
} = jscad.extrusions;

const main = () => {
  const circleShape = circle({
    radius: 25,
    segments: 60,
    center: [0, 0, 0]
});

const colorObject = colorize(
  [0, 0, 0],
  circleShape
)

const extrudeShape = extrudeLinear({
  height: 60,
  twistAngle: Math.PI * 30,
  twistSteps: 4
}, circleShape);

  return colorObject, extrudeShape;
};

module.exports = { main };