import { helloWorld } from './app/HelloWorld';
import * as process from 'process';

export class Startup {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static main(argv: string[]): void {
    console.log(helloWorld());
  }
}

Startup.main(process.argv);
