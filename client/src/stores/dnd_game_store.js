import { writable } from "svelte/store";

const dnd_store_data = writable({
	totalCorrect: 0,
	totalWrong: 0,
	round1Correct: 0,
	round1Wrong: 0,
	round2Correct: 0,
	round2Wrong: 0,
	firstLoad: true,
});

export const dnd_store = {
	subscribe: dnd_store_data.subscribe,
	incCorrectCount: (round) => {
		dnd_store_data.update((data) => {
			if (round === 1) {
				const updatedData = {
					...data,
					round1Correct: data.round1Correct + 1,
					totalCorrect: data.totalCorrect + 1,
				};
				return updatedData;
			} else if (round === 2) {
				const updatedData = {
					...data,
					round2Correct: data.round2Correct + 1,
					totalCorrect: data.totalCorrect + 1,
				};
				return updatedData;
			}
		});
	},
	incWrongCount: (round) => {
		dnd_store_data.update((data) => {
			if (round === 1) {
				const updatedData = {
					...data,
					round1Wrong: data.round1Wrong + 1,
					totalWrong: data.totalWrong + 1,
				};
				return updatedData;
			} else if (round === 2) {
				const updatedData = {
					...data,
					round2Wrong: data.round2Wrong + 1,
					totalWrong: data.totalWrong + 1,
				};
				return updatedData;
			}
		});
	},
	resetScores: () => {
		dnd_store_data.set({
			totalCorrect: 0,
			totalWrong: 0,
			round1Correct: 0,
			round1Wrong: 0,
			round2Correct: 0,
			round2Wrong: 0,
			firstLoad: true,
		});
	},
	changeFirstLoad: (newBool) => {
		dnd_store_data.update((data) => {
			const updatedData = {
				...data,
				firstLoad: newBool,
			};
			return updatedData;
		});
	},
};
