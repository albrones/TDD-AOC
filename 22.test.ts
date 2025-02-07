import { expect, test } from 'vitest';
import { Deck } from './22.js';

test('warpup', () => {
  expect(true).toBe(true);
});

test('should have a deck factory order (Top 0 1 2 3 4 5 6 7 8 9 Bottom)', () => {
  //Arrange
  let deck;
  //Act
  deck = new Deck(10);
  //Assert
  expect(deck.value.length).toEqual(10);
  expect([...deck.value]).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
});

test('should depile the deck (Top 0 1 2 3 4 5 6 7 8 9 Bottom) and have a deck at reverse order at the end', () => {
  //Arrange
  let deck = new Deck(10);
  let expectedDeck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //Act
  deck.reverse();
  //Assert
  expect([...deck.value]).toEqual([...expectedDeck]);
});

test('factory deck should have 57 cards ', () => {
  //Arrange
  let deck;
  //Act
  deck = new Deck(57);
  //Assert
  expect(deck.value[deck.value.length - 1]).toEqual(0);
  expect(deck.value[0]).toEqual(56);
  expect(deck.value.length).toEqual(57);
});

test('should cut 3 cards of the top and move them as a single unit to the bottom of the deck and have Top 3 4 5 6 7 8 9 0 1 2 Bottom', () => {
  //Arrange
  let deck = new Deck(10);
  let expectedDeck = [2, 1, 0, 9, 8, 7, 6, 5, 4, 3];
  //Act
  deck.cutTop(3);
  //Assert
  expect([...deck.value]).toEqual([...expectedDeck]);
});
