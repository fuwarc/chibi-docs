// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Chibi Docs',
        social: {
            github: 'https://github.com/CosmicPredator/chibi-cli',
        },
        sidebar: [
            {
                label: 'Getting Started',
                autogenerate: { directory: 'Getting-Started' },
            },
            {
                label: 'Installing Chibi',
                autogenerate: { directory: 'Installing-Chibi' },
            },
            {
                label: 'CLI Guide',
                autogenerate: { directory: 'CLI-Guide' },
            },
        ],
		}), 
	],
});