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

// subscribe to store and create custom methods
// export const dnd_store = {
//   subscribe: dnd_store_data.subscribe,
//   // increase correct count
//   incCorrectCount: (round: number) => {
//     dnd_store_data.update((data) => {
//       if (round === 1) {
//         // if round 1, load all current data,
//         // and override round1Correct and totalCorrect with incremented value
//         const updatedData = {
//           ...data,
//           round1Correct: data.round1Correct + 1,
//           totalCorrect: data.totalCorrect + 1,
//         };
//         return updatedData;
//       } else if (round === 2) {
//         // if round 2, load data and override round2Correct and totalCorrect
//         const updatedData = {
//           ...data,
//           round2Correct: data.round2Correct + 1,
//           totalCorrect: data.totalCorrect + 1,
//         };
//         return updatedData;
//       }
//     });
//   },
//   incWrongCount: (round: number) => {
//     dnd_store_data.update((data) => {
//       if (round === 1) {
//         const updatedData = {
//           ...data,
//           round1Wrong: data.round1Wrong + 1,
//           totalWrong: data.totalWrong + 1,
//         };
//         return updatedData;
//       } else if (round === 2) {
//         const updatedData = {
//           ...data,
//           round2Wrong: data.round2Wrong + 1,
//           totalWrong: data.totalWrong + 1,
//         };
//         return updatedData;
//       }
//     });
//   },
//   resetScores: () => {
//     dnd_store_data.set({
//       totalCorrect: 0,
//       totalWrong: 0,
//       round1Correct: 0,
//       round1Wrong: 0,
//       round2Correct: 0,
//       round2Wrong: 0,
//       firstLoad: true,
//     });
//   },
//   changeFirstLoad: (newBool: boolean) => {
//     dnd_store_data.update((data) => {
//       const updatedData = {
//         ...data,
//         firstLoad: newBool,
//       };
//       return updatedData;
//     });
//   },
// };

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
