export interface ColHeadings {
  col1Heading: string;
  col2Heading: string;
  col3Heading: string;
  col4Heading: string;
  col5Heading: string;
}

//// creating Pieces Type ////
interface DefCard {
  definition: string;
}
interface HintCard {
  hint: string;
}
interface PicCard {
  pic: string;
  alt: string;
}

export interface Piece extends DefCard, HintCard, PicCard {
  id: string;
  col: string;
}

export interface DND_Store {
	totalCorrect: number;
  	totalWrong: number;
  	round1Correct: number;
  	round1Wrong: number;
  	round2Correct: number;
  	round2Wrong: number;
  	firstLoad: boolean;
  	incCorrectCount: (round: number) => void;
  	incWrongCount: (round: number) => void;
  	resetScores: () => void;
  	changeFirstLoad: (newBool: boolean) => void;
}
