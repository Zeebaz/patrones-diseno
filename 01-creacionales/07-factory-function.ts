import { COLORS } from "../helpers/colors.ts";
/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

type Lnaguage = "en" | "es" | "fr";

function createGreeter(lang: Lnaguage) {
  return function (name: string) {
    const mesages = {
      es: `%cHola, %c${name}`,
      en: `%cHello, %c${name}`,
      fr: `%cBonjour, %c${name}`,
    };
    return mesages[lang];
  };
}

const greetInSpanish = createGreeter("es");
console.log(greetInSpanish("Pablo"), COLORS.green, COLORS.cyan); // Hola, Pablo

const greetInEnglish = createGreeter("en");
console.log(greetInEnglish("Pablo"), COLORS.blue, COLORS.cyan); // Hello, Pablo

const greetInFrench = createGreeter("fr");
console.log(greetInFrench("Pablo"), COLORS.orange, COLORS.cyan); // Bonjour, Pablo
