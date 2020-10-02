import { writable } from "svelte/store";

export const scoreCorrectCount = writable(0);

export const scoreWrongCount = writable(0);
