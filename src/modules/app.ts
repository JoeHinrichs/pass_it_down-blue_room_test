import * as pc from 'playcanvas';

import { initCharacter } from './character';

const canvas = document.getElementById('playcanvas') as HTMLCanvasElement;
const app = new pc.Application(canvas);

app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

window.addEventListener('resize', () => app.resizeCanvas());

loadScene('config.json', '2520869.json', init);

function loadScene(config: string, scene: string, start_callback: () => void) {
  var CONFIG_FILENAME = config;
  var SCENE_PATH = scene;

  app.configure(CONFIG_FILENAME, function (err) {
    if (err) {
      console.error(err);
    }

    //preload should go here...

    app.scenes.loadScene(SCENE_PATH, function (err) {
      if (err) {
        console.error(err);
      }
      app.start();
    });
  });

  app.on('start', function () {
    if (start_callback) {
      start_callback();
    }
  });
}

function init() {

  pc.WasmModule.setConfig('Ammo', {
    glueUrl: '.files/assets/wasm/ammo/ammo.wasm.js',
    wasmUrl: './assets/wasm/ammo/ammo.wasm.wasm',
    fallbackUrl: './assets/wasm/ammo/ammo.js'
  });

  initCharacter(app);

};


export { init };