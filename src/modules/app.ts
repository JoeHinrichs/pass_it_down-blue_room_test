import * as pc from 'playcanvas';

const canvas = document.getElementById('playcanvas') as HTMLCanvasElement;
const app = new pc.Application(canvas);

app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

window.addEventListener('resize', () => app.resizeCanvas());

loadScene('config.json', '2519726.json', init);

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
    });
    start_callback();
  });
}

function init() {  

  app.start();

};


export { init };