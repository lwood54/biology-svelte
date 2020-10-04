import { writable } from "svelte/store";

export const totalCorrect = writable(0);

export const totalWrong = writable(0);

export const round1Correct = writable(0);

export const round1Wrong = writable(0);

export const round2Correct = writable(0);

export const round2Wrong = writable(0);

export const firstLoad = writable(true);
