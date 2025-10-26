import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `content/blog/` directory (Obsidian vault)
	loader: glob({ base: './content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		date: z.coerce.date(),
		tags: z.array(z.string()).optional(),
		draft: z.boolean().optional().default(false),
	}),
});

export const collections = { blog };
