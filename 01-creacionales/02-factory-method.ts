/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
  prepare(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de %cpollo...", COLORS.yellow);
  }
}
class VeggieHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de %cvegetales...", COLORS.green);
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de %ccarne...", COLORS.red);
  }
}

/*
 * Clase abstracta
 * La clase Restaurant es abstracta porque no puede ser instanciada
 * directamente, sino que debe ser heredada por clases que lo implementen.
 * Una clase abstracta debe tener al menos un método abstracto.
 * Una clase abstracta sirve para encapsular lógica común a las subclases.
 */

abstract class Restaurant {
  abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

class VeggieRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new VeggieHamburger();
  }
}
class BeefRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

function main() {
  let restaurant: Restaurant;

  const burgerType = prompt(
    "¿Qué tipo de hamburguesa deseas? (chicken/veggie/beef) "
  );

  switch (burgerType) {
    case "chicken":
      restaurant = new ChickenRestaurant();
      break;
    case "veggie":
      restaurant = new VeggieRestaurant();
      break;
    case "beef":
      restaurant = new BeefRestaurant();
      break;
    default:
      throw new Error("Opcion no valida");
  }

  restaurant.orderHamburger();
}

main();
