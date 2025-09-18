
# Long Way

Create package:

```
npm init
```

- Remove main / entry

Install typescript:

```
npm install -D typescript
```

- Test running typescript

tsconfig.json:

```
echo '{
	"compilerOptions": {
		"target": "ES2022",
		"useDefineForClassFields": true,
		"module": "ESNext",
		"skipLibCheck": true,

		/* Bundler mode */
    	"moduleResolution": "bundler",
    	"verbatimModuleSyntax": true,
    	"moduleDetection": "force",
		"esModuleInterop": true,
		"outDir": "js/",

		/* Linting */
    	"strict": true,
    	"noUnusedLocals": true,
    	"noUnusedParameters": true,
    	"erasableSyntaxOnly": true,
    	"noFallthroughCasesInSwitch": true,
    	"noUncheckedSideEffectImports": true
	},
	"include": ["ts/**/*"]
}' > tsconfig.json
```

Transpile typescript:

```
npm tsc
```

Add build command to `package.json`:

```
"build": "tsc"
```

Install openlayers:

```
npm install ol
```

Put in index.ts:

```
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
```

Install rollup:

```
npm install rollup
```

Create rollup.config.js:

```
echo 'export default [
	{
		input: "js/index.js",
		output: {
			file: "js/index.js",
		},
	},
];' > rollup.config.js
```

Modify build command:

```
"build": "tsc && rollup -c"
```

Install plugin:

```
npm install -D @rollup/plugin-node-resolve
```

Update rollup.config.js:

```
plugins: [nodeResolve()],
```

Replace rollup.config.js:

```
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
	{
		input: "js/index.js",
		output: {
			file: "js/index.js",
		},
		plugins: [nodeResolve()],
	},
	{
		input: "js/another.js",
		output: {
			file: "js/another.js",
		},
		plugins: [nodeResolve()],
	},
];
```

Install tsc-watch:

```
npm install -D tsc-watch
```




