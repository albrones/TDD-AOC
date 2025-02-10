import { readFileSync } from 'fs';

export class Deck {
  value: number[];
  constructor(deckSize: number = 10007) {
    this.value = this.initFactoryDeck(deckSize);
  }
  initFactoryDeck(deckSize: number) {
    return Array.from(Array(deckSize).keys()).reverse();
  }
  reverse() {
    return this.value.reverse();
  }
  cut(packSize: number) {
    const cutPoint = packSize >= 0 ? this.value.length - packSize : 0;
    const pastePoint = packSize >= 0 ? 0 : this.value.length;
    const pack = this.value.splice(cutPoint, Math.abs(packSize));
    this.value.splice(pastePoint, 0, ...pack);
  }
  increment(indice: number) {
    const deckSize = this.value.length;
    const newDeck = new Array(deckSize);

    for (let i = 0; i < deckSize; i++) {
      const currentIndice = (i * indice) % deckSize;
      newDeck[currentIndice] = this.value.pop();
    }
    this.value = newDeck.reverse();
  }
  readFile(fileUrl: string) {
    const file = readFileSync(fileUrl, { encoding: 'utf8', flag: 'r' });
    const lines = file.split('\n');
    return lines;
  }
  shuffle(lines: string[]) {
    for (let line of lines) {
      if (line.startsWith('deal with increment')) {
        const increment = line.match(/(\d+)/)[0];
        this.increment(Number(increment));
      }
      if (line.startsWith('deal into new stack')) {
        this.value = this.reverse();
      }
      if (line.startsWith('cut')) {
        const cut = line.match(/[+-]?(\d+)/)[0];
        this.cut(Number(cut));
      }
    }
  }

  shuffleWithFile(fileName: string) {
    console.log(this.value);
    const lines = this.readFile(fileName);
    this.shuffle(lines);
  }
}
