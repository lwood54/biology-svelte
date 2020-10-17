export interface ColHeadings {
  col1Heading: string;
  col2Heading: string;
  col3Heading: string;
  col4Heading: string;
  col5Heading: string;
}

//// creating Pieces Type ////
interface DefCard {
  definition: string
}
interface HintCard {
  hint: string
}
interface PicCard {
  pic: string,
  alt: string
}
// export type Pieces = DefCard | HintCard | PicCard;
// had to use this pattern instead of using BaseCard and exporting type Pieces
// to give options when using this type in game
/// TODO: double check / confirm this is right approach to correct for error:
////  "Type 'Pieces' must have a '[Symbol.iterator]()' method that returns an"
export interface Pieces extends DefCard, HintCard, PicCard {
  "id": string;
  "col": string;

  // TODO: fix this method of adding iterator, saying no next() method
  // unsure of correct implementation for this
  next(...args: []): DefCard | HintCard | PicCard;
  return(value: DefCard | HintCard | PicCard): DefCard | HintCard | PicCard;
  throw(e: any): any;
  // [Symbol.iterator](): DefCard | HintCard | PicCard; // this does not work, says no next() method
  [Symbol.iterator](): any; // this works, but is not ideal?
};
////////