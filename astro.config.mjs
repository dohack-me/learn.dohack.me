// @ts-check
import {defineConfig} from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
	site: 'https://phosphor.diffusehyperion.com',
	integrations: [
		starlight({
			title: "Phosphor",
			social: {
				github: "https://github.com/diffusehyperion/phosphor",
			},
			sidebar: [
				{
					label: "Introduction",
					slug: "introduction"
				},
				{
					label: "Binary Exploitation",
					items: [
						{
							label: "Introduction",
							slug: "pwn/introduction"

						},
						{
							label: "Tooling",
							slug: "pwn/tooling"

						},
						{
							label: "Tutorial",
							autogenerate: {
								directory: "pwn/tutorials"
							}
						},
						{
							label: "Guides",
							autogenerate: {
								directory: "pwn/guides"
							}
						},
						{
							label: "Explanations",
							autogenerate: {
								directory: "pwn/explanations"
							}
						},
					],
				},
			],
		}),
	],
})
