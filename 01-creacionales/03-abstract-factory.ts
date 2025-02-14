/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import { COLORS } from "../helpers/colors.ts";

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hambuger {
  prepare(): void;
}

interface Drink {
  pour(): void;
}

class ChickenHamburger implements Hambuger {
  prepare(): void {
    console.log("%c   - Preparando hamburguesa de pollo", COLORS.orange);
  }
}
class BeefHamburger implements Hambuger {
  prepare(): void {
    console.log("%c   - Preparando hamburguesa de carne", COLORS.cyan);
  }
}

class Water implements Drink {
  pour(): void {
    console.log("%c   - Preparando agua", COLORS.green);
  }
}

class Juice implements Drink {
  pour(): void {
    console.log("%c   - Pouring juice", COLORS.purple);
  }
}

interface RestaurantFactory {
  createHambuger(): Hambuger;
  createDrink(): Drink;
}

class FastFoodRestaurant implements RestaurantFactory {
  constructor() {
    console.log("%c\n > FAST FOOD RESTAURANT", COLORS.red);
  }
  createHambuger(): Hambuger {
    return new BeefHamburger();
  }
  createDrink(): Drink {
    return new Juice();
  }
}
class HealthyRestaurant implements RestaurantFactory {
  constructor() {
    console.log("%c\n > HEALTHY RESTAURANT", COLORS.red);
  }
  createHambuger(): Hambuger {
    return new ChickenHamburger();
  }
  createDrink(): Drink {
    return new Water();
  }
}

function main(factory: RestaurantFactory) {
  const hamburger = factory.createHambuger();
  const drink = factory.createDrink();

  hamburger.prepare();
  drink.pour();
}

main(new FastFoodRestaurant());
main(new HealthyRestaurant());
