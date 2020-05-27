const animalSort = (animals) => animals.slice().sort((animal1, animal2) => {
  if (animal2.numberOfLegs !== animal1.numberOfLegs) {
    return animal1.numberOfLegs > animal2.numberOfLegs ? 1 : -1;
  }
  return animal1.name > animal2.name ? 1 : -1;
});

export { animalSort };
