import { Map, View } from "ol";
import {defaults as defaultControls} from "ol/control/defaults";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

new Map({
  target: "map",
  view: new View({
    center: [0, 0],
    zoom: 0,
  }),
  layers: [
		new TileLayer({source: new OSM()}),
  ],
  controls: defaultControls({attribution: false}),
});



