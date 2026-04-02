/**
 * Utilities for rendering AI-generated markdown content
 * in a safe and formatted way.
 */

/** Convert basic markdown to HTML (headings, bold, italic, links, lists) */
export function markdownToHtml(markdown: string): string {
  let html = markdown
    // Headings
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Bold and italic
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '<br />');

  // Wrap list items in <ul>
  html = html.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>');
  // Clean up nested <ul> tags
  html = html.replace(/<\/ul>\s*<ul>/g, '');

  return `<p>${html}</p>`;
}

/** Sanitize HTML to prevent XSS — strips script tags and event handlers */
export function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/on\w+\s*=\s*'[^']*'/gi, '');
}

/** Strip all HTML tags from a string */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}
