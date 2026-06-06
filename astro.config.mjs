import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

function externalLinks() {
  return (tree) => {
    const visit = (node) => {
      if (!node || typeof node !== 'object') return;

      if (
        node.tagName === 'a' &&
        typeof node.properties?.href === 'string' &&
        /^https?:\/\//.test(node.properties.href)
      ) {
        node.properties.target = '_blank';
        node.properties.rel = 'noopener noreferrer';
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
}

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  markdown: {
    rehypePlugins: [externalLinks],
  },
});
