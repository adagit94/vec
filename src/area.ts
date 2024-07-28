export const curvedArea = (points: [number, number][]) => {
    let area = 0
    
    for (let i = 1; i < points.length; i++) {
        const p1 = points[i - 1]
        const p2 = points[i]

        const rect = {
            x1: p1[0],
            x2: p2[0],
            y1: p1[1],
            y2: p2[1],
        }

        const width = Math.abs(rect.x2 - rect.x1)
        const height = Math.abs(rect.y2 - rect.y1)
        const rectArea = width * height
        const triangleArea = rectArea / 2
        const bottomRectArea = width * Math.min(rect.y1, rect.y2)

        area += triangleArea + bottomRectArea
    }

    return area
}

type Density = (params: {
  values: [number, number][];
  maxXVal: number;
  maxYVal: number;
  width: number;
  height: number;
  xInterval?: [number, number];
  yInterval?: [number, number];
}) => number;

export const density: Density = ({ values, xInterval, yInterval, maxXVal, maxYVal, width, height }) => {
  const intervalValues =
    xInterval === undefined && yInterval === undefined
      ? values
      : values.filter(
          ([x, y]) =>
            (xInterval === undefined || (x >= xInterval[0] && x <= xInterval[1])) &&
            (yInterval === undefined || (y >= yInterval[0] && y <= yInterval[1])),
        );

  const x1 = width * ((xInterval?.[0] ?? 0) / maxXVal);
  const x2 = width * ((xInterval?.[1] ?? maxXVal) / maxXVal);
  const y1 = height * ((yInterval?.[0] ?? 0) / maxYVal);
  const y2 = height * ((yInterval?.[1] ?? maxYVal) / maxYVal);

  const intervalWidth = x2 - x1;
  const intervalHeight = y2 - y1;

  const area = intervalWidth * intervalHeight;
  const ratio = intervalValues.length / area;

  return ratio;
};

type DensityPopulated = (params: { values: [number, number][]; width: number; height: number }) => number;

export const densityPopulated: DensityPopulated = ({ values, width, height }) => {
  let minX = values[0][0];
  let maxX = values[0][0];
  let minY = values[0][1];
  let maxY = values[0][1];

  for (let i = 1; i < values.length; i++) {
    const [xVal, yVal] = values[i];

    minX = Math.min(minX, xVal);
    maxX = Math.max(maxX, xVal);
    minY = Math.min(minY, yVal);
    maxY = Math.max(maxY, yVal);
  }

  const minXCoord = width * (minX / maxX);
  const maxXCoord = width;
  const minYCoord = height * (minY / maxY);
  const maxYCoord = height;

  const intervalWidth = maxXCoord - minXCoord;
  const intervalHeight = maxYCoord - minYCoord;

  const area = intervalWidth * intervalHeight;
  const ratio = values.length / area;

  return ratio;
};