// shuffle items in any array
export function shuffleArray<T>(array: T[]): T[] {
  // copy array to manipulate
  let arrayCopy = [...array];
  let mixedArray = [];
  // loop through copy until no elements left
  while (arrayCopy.length > 0) {
    let randNum = Math.floor(Math.random() * arrayCopy.length);
    // add removed elements to mixedArray as looping occurs
    mixedArray.push(arrayCopy.splice(randNum, 1)[0]);
  }
  return mixedArray;
};

// check if element has certain class
export const hasClass = (el: HTMLElement, clss: string) => {
  return el.classList.contains(clss);
};