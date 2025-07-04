// @ts-check
import {defineConfig} from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
	site: 'https://learn.dohack.me',
	integrations: [
		starlight({
			title: "learn.dohack.me",
			social: {
				github: "https://github.com/dohack-me/learn.dohack.me",
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
				{
					label: "Web Exploitation",
					items: [
						{
							label: "Introduction",
							slug: "pwn/introduction"

						},
						{
							label: "Tutorial",
							autogenerate: {
								directory: "web/tutorials"
							}
						},
						{
							label: "Guides",
							autogenerate: {
								directory: "web/guides"
							}
						},
						{
							label: "Explanations",
							autogenerate: {
								directory: "web/explanations"
							}
						},
					],
				},
			],
		}),
	],
})
