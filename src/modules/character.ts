import * as pc from 'playcanvas';
import { FirstPersonController } from './first-person-controller';

function initCharacter(app: pc.Application) {
  const char = app.root.findByName('Character');
  const camera = app.root.findByName('Camera');

  if (char && camera) {
    //((char as pc.Entity).script as pc.ScriptComponent).create(FirstPersonController, {
      //properties: {
        //camera: camera
      //}
    //});
  }
};

export { initCharacter };