import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@1/world/110m.json";

const handleClick = (geo) => {
  alert(`Sie haben auf ${geo.rsmKey} geklickt.`);
};

const WorldMap = () => (
  <ComposableMap>
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            onClick={() => handleClick(geo)}
            style={{
              default: { fill: "#D6D6DA", outline: "none" },
              hover: { fill: "#22220e", outline: "none" },
              pressed: { fill: "#1f1f0b", outline: "none" },
            }}
          />
        ))
      }
    </Geographies>
  </ComposableMap>
);

export default WorldMap;
