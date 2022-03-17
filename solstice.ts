interface Vec2 {
  x: number;
  y: number;
}

function circleDivide(radius: number, parts: number = 10): Vec2[] {
  const positions: Vec2[] = [];

  for (let p = 0; p < parts; p++) {
    const theta = (2 * Math.PI * p) / parts;
    const st = Math.sin(theta);
    const ct = Math.cos(theta);
    positions.push({
      x: radius * ct,
      y: radius * st,
    });
  }

  return positions;
}
