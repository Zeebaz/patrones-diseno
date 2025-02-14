/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Document {
  public title: string;
  private content: string;
  public author: string;

  constructor(title: string, content: string, author: string) {
    this.title = title;
    this.content = content;
    this.author = author;
  }

  clone(): Document {
    return new Document(this.title, this.content, this.author);
  }

  displayInfo(): void {
    console.log(`
      Title: ${this.title}
      Author: ${this.author}
      Content: ${this.content}`);
  }
}

function main() {
  const document1 = new Document("Cotización", "500 dolares", "Author 1");
  console.log({ InstanceaDoc1: document1 });
  document1.displayInfo();

  const document2 = document1.clone(); // usando patron
  document2.title = "Cotización 2";
  console.log({ InstanceaDoc2: document2 });
  document2.displayInfo();

  const document3 = { ...document1 };
  document3.title = "Cotización 3";
  console.log({ InstanceaDoc3: document3 });
  // document3.displayInfo(); // pierde el prototype Document

  const document4 = structuredClone(document1);
  document4.title = "Cotización 4";
  console.log({ InstanceaDoc4: document4 });
  // document4.displayInfo(); // pierde el prototype Document
}
main();
