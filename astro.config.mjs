// @ts-check
import {defineConfig} from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
	site: 'https://learn.dohack.me',
	integrations: [
		starlight({
			title: "learn.dohack.me",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/dohack-me/learn.dohack.me"
				}
			],
			sidebar: [
				{
					label: "Start Here",
					items: [
						{
							autogenerate: {
								directory: "introduction"
							}
						}
					]
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
							items: [
								{
									autogenerate: {
										directory: "pwn/tutorials"
									}
								}
							]
						},
						{
							label: "Guides",
							items: [
								{
									autogenerate: {
										directory: "pwn/guides"
									}
								}
							]
						},
						{
							label: "Explanations",
							items: [
								{
									autogenerate: {
										directory: "pwn/explanations"
									}
								}
							]
						},
					],
				},
				{
					label: "Web Exploitation",
					items: [
						{
							label: "Introduction",
							slug: "web/introduction"

						},
						{
							label: "Tutorial",
							items: [
								{
									autogenerate: {
										directory: "web/tutorials"
									}
								}
							]
						},
						{
							label: "Guides",
							items: [
								{
									autogenerate: {
										directory: "web/guides"
									}
								}
							]
						},
						{
							label: "Explanations",
							items: [
								{
									autogenerate: {
										directory: "web/explanations"
									}
								}
							]
						},
					],
				},
			],
		}),
	],
})
