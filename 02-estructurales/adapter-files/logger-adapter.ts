import { Logger } from "@deno-library/logger";

interface ILoggerAdapter {
  file: string;
  writeLog: (msg: string) => void;
  writeError: (msg: string) => void;
  writeWarning(msg: string): void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {
  public file: string;
  private logger = new Logger();

  constructor(file: string) {
    this.file = file;
  }

  writeLog(msg: string): void {
    this.logger.info(`[${this.file} Log] ${msg}\n`);
  }
  writeError(msg: string): void {
    this.logger.warn(`[${this.file} Error] ${msg}\n`);
  }
  writeWarning(msg: string): void {
    this.logger.error(`[${this.file} Warning] ${msg}}\n`);
  }
}
/* const looger = new Logger();

looger.info('Este es un mensaje de log');
looger.error('Este es un mensaje de error');
looger.warning('Este es un mensaje de advertencia'); */
