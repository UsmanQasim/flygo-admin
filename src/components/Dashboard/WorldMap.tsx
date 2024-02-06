import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const WorldMap = () => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
  return (
    <div className="col-xxl-6">
      <div className="card">
        <div className="card-header-title card-header">
          <h5>World Map</h5>
        </div>
        <div className="card-body custom-map">
          <ComposableMap>
            {/* <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies> */}
            error
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
