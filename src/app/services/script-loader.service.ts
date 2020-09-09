import { Injectable } from '@angular/core';
declare var document: any;
@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  scripts: Array<ScriptDict> = new Array<ScriptDict>();
  constructor() {
    this.scripts.push(
      new ScriptDict('measure-calc', 213, 'assets/externaljs/measure-calc-213.js', false)
    );
    console.log('loading: ', this.scripts);
  }

  loadScript(name: string): Promise<any> {

    return new Promise((resolve, reject) => {
      console.log('here is the name', this.scripts);
      const s = this.scripts.find(f => f.scriptName = name);
      const index = this.scripts.indexOf(s);
      if (!s.loaded) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = s.scriptUrl;
        script.onload = () => {
          this.scripts[index].loaded = true;
          resolve({script: name, loaded: true, status: 'Loaded'});
        };
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }
}


export class ScriptDict {
  scriptName: string;
  program: number;
  scriptUrl: string;
  loaded: boolean;
  constructor(scriptName: string, program: number, scriptUrl: string, loaded: boolean) {
    this.scriptName = scriptName;
    this.program = program;
    this.scriptUrl = scriptUrl;
    this.loaded = loaded;
  }
}
