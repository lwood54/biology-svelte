import { writable } from "svelte/store";

// define initial scores
const dnd_store_data = writable({
  totalCorrect: 0,
  totalWrong: 0,
  round1Correct: 0,
  round1Wrong: 0,
  round2Correct: 0,
  round2Wrong: 0,
  firstLoad: true,
});

/// restructured dnd_store
export const dnd_store = {
  subscribe: dnd_store_data.subscribe,
  updateR1Correct: (numCorrect: number) => {
    dnd_store_data.update((data) => {
      const updatedData = {
        ...data,
        round1Correct: numCorrect,
      };
      return updatedData;
    });
  },
  updateR2Correct: (numCorrect: number) => {
    dnd_store_data.update((data) => {
      const updatedData = {
        ...data,
        round2Correct: numCorrect,
      };
      return updatedData;
    });
  },
  updateR1Wrong: (numWrong: number) => {
    dnd_store_data.update((data) => {
      const updatedData = {
        ...data,
        round1Wrong: numWrong,
      };
      return updatedData;
    });
  },
  updateR2Wrong: (numWrong: number) => {
    dnd_store_data.update((data) => {
      const updatedData = {
        ...data,
        round2Wrong: numWrong,
      };
      return updatedData;
    });
  },
  updateTotCorrect: () => {
    dnd_store_data.update((data) => {
      const updatedData = {
        ...data,
        totalCorrect: data.round1Correct + data.round2Correct,
      };
      return updatedData;
    });
  },
  updateTotWrong: () => {
    dnd_store_data.update((data) => {
      const updatedData = {
        ...data,
        totalWrong: data.round1Wrong + data.round2Wrong,
      };
      return updatedData;
    });
  },
  resetScores: (section: string) => {
    switch (section) {
      case "round1":
        dnd_store_data.update((data) => {
          const updatedData = {
            ...data,
            round1Correct: 0,
            round1Wrong: 0,
          };
          return updatedData;
        });
        break;
      case "round2":
        dnd_store_data.update((data) => {
          const updatedData = {
            ...data,
            round2Correct: 0,
            round2Wrong: 0,
          };
          return updatedData;
        });
        break;
      default:
        dnd_store_data.set({
          totalCorrect: 0,
          totalWrong: 0,
          round1Correct: 0,
          round1Wrong: 0,
          round2Correct: 0,
          round2Wrong: 0,
          firstLoad: true,
        });
        break;
    }
  },

  changeFirstLoad: (newBool: boolean) => {
    dnd_store_data.update((data) => {
      const updatedData = {
        ...data,
        firstLoad: newBool,
      };
      return updatedData;
    });
  },
};
