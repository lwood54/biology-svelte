import { writable } from "svelte/store";

export const totalCorrect = writable(0);

export const totalWrong = writable(0);

export const round1Correct = writable(0);

export const round1Wrong = writable(0);

export const round2Correct = writable(0);

export const round2Wrong = writable(0);

export const firstLoad = writable(true);

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
	incR1Correct: () => {
		dnd_store_data.update((data) => {
			const updatedData = {
				// merges previous data with new data
				...data,
				round1Correct: data.round1Correct + 1,
				totalCorrect: data.totalCorrect + 1,
			};
			return updatedData;
		});
	},
	incR1Wrong: () => {
		dnd_store_data.update((data) => {
			const updatedData = {
				...data,
				round1Wrong: data.round1Wrong + 1,
				totalWrong: data.totalWrong + 1,
			};
			return updatedData;
		});
	},
	incR2Correct: () => {
		dnd_store_data.update((data) => {
			const updatedData = {
				...data,
				round2Correct: data.round2Correct + 1,
				totalCorrect: data.totalCorrect + 1,
			};
			return updatedData;
		});
	},
	incR2Wrong: () => {
		dnd_store_data.update((data) => {
			const updatedData = {
				...data,
				round2Wrong: data.round2Wrong + 1,
				totalWrong: data.totalWrong + 1,
			};
			return updatedData;
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
