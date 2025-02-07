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
}
