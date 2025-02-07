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
}
