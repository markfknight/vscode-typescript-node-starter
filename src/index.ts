import { hello_world } from './app/hello_world';
import * as process from 'process';

export class Startup {
  public static main(argv: string[]): void {
    console.log(hello_world());
  }
}

Startup.main(process.argv);
