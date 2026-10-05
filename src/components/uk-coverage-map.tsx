// Pure dot-density map: no UK outline is drawn, since we don't have a
// verified coastline dataset to embed and an invented one could be
// geographically wrong. At ~1,700+ points the coastline/city clusters
// read clearly from the dots alone.
const HEIGHT = 640;
const PADDING_FACTOR = 0.04;

export function UkCoverageMap({ points }: { points: [number, number][] }) {
  if (points.length === 0) return null;

  const lats = points.map((p) => p[0]);
  const lons = points.map((p) => p[1]);
  const latMin = Math.min(...lats);
  const latMax = Math.max(...lats);
  const lonMin = Math.min(...lons);
  const lonMax = Math.max(...lons);

  const latPad = (latMax - latMin) * PADDING_FACTOR;
  const lonPad = (lonMax - lonMin) * PADDING_FACTOR;
  const latRange = latMax - latMin + latPad * 2;
  const lonRange = lonMax - lonMin + lonPad * 2;

  const meanLatRad = ((latMin + latMax) / 2) * (Math.PI / 180);
  const aspect = (lonRange * Math.cos(meanLatRad)) / latRange;
  const width = Math.round(HEIGHT * aspect);

  const x = (lon: number) => ((lon - (lonMin - lonPad)) / lonRange) * width;
  const y = (lat: number) => (((latMax + latPad) - lat) / latRange) * HEIGHT;

  return (
    <svg
      viewBox={`0 0 ${width} ${HEIGHT}`}
      className="h-auto w-full max-w-[420px]"
      role="img"
      aria-label={`Map of the UK showing ${points.length} golf courses tracked by Dink'It`}
    >
      {points.map(([lat, lon], i) => (
        <circle key={i} cx={x(lon)} cy={y(lat)} r={2.2} fill="#87ffad" fillOpacity={0.75} />
      ))}
    </svg>
  );
}
