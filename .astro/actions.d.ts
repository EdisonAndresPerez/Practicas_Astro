declare module "astro:actions" {
	type Actions = typeof import("C:/Users/Win10/Desktop/Andres/Astro/astro-authenticacionFirebase/src/actions/index.ts")["server"];

	export const actions: Actions;
}