import createPressData from '$lib/SveltePress/functions/dataGenerator';
import createSidebar from '$lib/SveltePress/functions/sidebarGenerator';
import navData from '$lib/SveltePress/functions/navGenerator';
import pressData from '$lib/SveltePress/db/sveltePressData';
import sidebar from '$lib/SveltePress/db/sveltePressSidebar';
import index from '$lib/SveltePress/db/sveltePressIndex';
import { dev } from '$app/env';

// These are responsible for supplying data
// if on dev mode, it will generate the data
// every time, but on prod, it will use the databases
// generated by generateProdData

export function getSide() {
	return dev ? createSidebar() : sidebar;
}

export function getData() {
	return dev ? createPressData()[0] : pressData;
}

export function getContent() {
	return dev ? false : index;
}

export function getNav() {
	return navData(getSide());
}