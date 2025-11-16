/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

import { COLORS } from "../helpers/colors.ts";

class CodeEditorState {
  readonly content: string;
  readonly cursorPosition: number;
  readonly unsaveChanges: boolean;

  constructor(content: string, cursorPosition: number, unsaveChanges: boolean) {
    this.content = content;
    this.cursorPosition = cursorPosition;
    this.unsaveChanges = unsaveChanges;
  }

  displayState(): void {
    console.log("%cEstado del editor", COLORS.purple);
    console.log(`
      Content: ${this.content}
      Cursor Position: ${this.cursorPosition}
      Unsave Changes: ${this.unsaveChanges}
      `);
  }

  copyWith({
    content,
    cursorPosition,
    unsaveChanges,
  }: Partial<CodeEditorState>): CodeEditorState {
    return new CodeEditorState(
      content ?? this.content,
      cursorPosition ?? this.cursorPosition,
      unsaveChanges ?? this.unsaveChanges
    );
  }
}

class CodeEditorHistory {
  private history: CodeEditorState[] = [];
  private currentIndex: number = -1;

  save(state: CodeEditorState) {
    if (this.currentIndex < this.history.length - 1) {
      this.history.splice(0, this.currentIndex + 1);
    }
    this.history.push(state);
    this.currentIndex++;
  }

  undo(): CodeEditorState | null {
    if (this.currentIndex <= 0) return null;

    this.currentIndex--;
    return this.history[this.currentIndex];
  }

  redo(): CodeEditorState | null {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }
    return null; // 0,1,2,3,4,[5]
  }
}

function main() {
  const history = new CodeEditorHistory();

  console.log("%cEstado 1:", COLORS.green);
  let editorState = new CodeEditorState(
    "console.log('Hello World!!')",
    2,
    false
  );
  history.save(editorState);
  editorState.displayState();

  console.log("%cEstado 2:", COLORS.green);
  editorState = editorState.copyWith({
    cursorPosition: 3,
    unsaveChanges: true,
    content: 'console.log("Hello World!!"); \n console.log("New line");',
  });
  history.save(editorState);
  editorState.displayState();

  console.log("%cEstado 3 - mover cursor:", COLORS.green);
  editorState = editorState.copyWith({
    cursorPosition: 5,
    unsaveChanges: true,
    content: 'console.log("Hello World!!"); \n console.log("New line");',
  });
  history.save(editorState);
  editorState.displayState();

  console.log("%cEstado 4 - despues del undo:", COLORS.green);
  editorState = history.undo()!;
  editorState.displayState();

  console.log("%cEstado 5 - despues del redo:", COLORS.green);
  editorState = history.redo()!;
  editorState.displayState();
}

main();
