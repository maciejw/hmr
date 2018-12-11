declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
  }
}
import 'webpack';

declare module 'webpack' {

  interface Compiler { 
    outputPath: string;
  }
  export interface OutputFileSystem {
    readFile(path: string, callback: (err: Error | undefined | null, contents: Buffer) => void): void;
  }
}
