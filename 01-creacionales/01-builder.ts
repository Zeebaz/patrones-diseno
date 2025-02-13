/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
  public cpu: string = "cpu - not defined";
  public ram: string = "cpu - not defined";
  public storage: string = "cpu - not defined";
  public gpu?: string = "cpu - not defined";

  displayConfiguration(): void {
    console.log(`Configuracion de la computadora
      CPU: ${this.cpu}
      RAM: ${this.ram}
      Storage: ${this.storage}
      GPU: ${this.gpu ?? "No tiene GPU"}
    `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGpu(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}

function main() {
  const builderInstance: ComputerBuilder = new ComputerBuilder();
  const basicComputer = builderInstance
    .setCPU("Intel Core i7 7Gen")
    .setRAM("4GB")
    .setStorage("250GB")
    .setGpu("RTX 3070Ti")
    .build();

  console.log("%cComputadora basica1:", COLORS.violet);
  basicComputer.displayConfiguration();
  
  console.log("%cComputadora Gamer:", COLORS.violet);
  const basicComputer2: Computer = new ComputerBuilder()
    .setCPU("Intel Core i7")
    .setRAM("16GB")
    .setRAM("32GB")
    .setStorage("2TB")
    .setGpu("RTX 3080")
    .build();

  basicComputer2.displayConfiguration();
}

main();
