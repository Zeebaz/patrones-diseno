class ConfigManager {
  private config: Record<string, string> = {};
  public setConfig(key: string, value: string) {
    this.config[key] = value;
  }

  public getConfig(key: string): string | undefined {
    return this.config[key];
  }

  public getAllConfig(): Record<string, string> {
    return { ...this.config };
  }
}


export const configManger = new ConfigManager();