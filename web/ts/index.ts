import { Map, View } from "ol";
import {defaults as defaultControls} from "ol/control/defaults";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

new Map({
  target: "map",
  view: new View({
    center: [16137242.966102371, -4553183.47010652],
    zoom: 5,
  }),
  layers: [
		new TileLayer({source: new OSM()}),
  ],
  controls: defaultControls({attribution: false}),
});


