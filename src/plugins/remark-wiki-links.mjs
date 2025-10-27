import { visit } from 'unist-util-visit';

/**
 * Remark plugin to transform wiki-style links [[link]] into proper markdown links
 */
export function remarkWikiLinks() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!node.value || typeof node.value !== 'string') return;
      
      const wikiLinkRegex = /\[\[([^\]]+)\]\]/g;
      const matches = [...node.value.matchAll(wikiLinkRegex)];
      
      if (matches.length === 0) return;
      
      const newNodes = [];
      let lastIndex = 0;
      
      matches.forEach((match) => {
        const fullMatch = match[0];
        const linkText = match[1];
        const matchIndex = match.index;
        
        // Add text before the match
        if (matchIndex > lastIndex) {
          newNodes.push({
            type: 'text',
            value: node.value.slice(lastIndex, matchIndex)
          });
        }
        
        // Parse the link - support [[slug|display text]] or [[slug]]
        const parts = linkText.split('|');
        const slug = parts[0].trim();
        const displayText = parts[1] ? parts[1].trim() : slug;
        
        // Convert to URL-friendly slug
        const urlSlug = slug.toLowerCase().replace(/\s+/g, '-');
        
        // Create a link node
        newNodes.push({
          type: 'link',
          url: `/blog/${urlSlug}`,
          children: [
            {
              type: 'text',
              value: displayText
            }
          ]
        });
        
        lastIndex = matchIndex + fullMatch.length;
      });
      
      // Add remaining text after last match
      if (lastIndex < node.value.length) {
        newNodes.push({
          type: 'text',
          value: node.value.slice(lastIndex)
        });
      }
      
      // Replace the text node with the new nodes
      if (newNodes.length > 0) {
        parent.children.splice(index, 1, ...newNodes);
      }
    });
  };
}
