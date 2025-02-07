export class Deck {
  value: number[];
  constructor(deckSize: number) {
    this.value = this.initFactoryDeck(deckSize);
  }
  initFactoryDeck(deckSize: number) {
    return Array.from(Array(deckSize).keys()).reverse();
  }
  reverse() {
    return this.value.reverse();
  }
  cutTop(packSize: number) {
    const pack = this.value.splice(this.value.length - packSize, packSize);

    this.value.splice(0, 0, ...pack);
  }
  cutBottom(packSize: number) {
    const pack = this.value.splice(0, Math.abs(packSize));
    this.value.splice(this.value.length, 0, ...pack);
  }
}
