// Prefixes root-absolute image URLs in markdown with the site base,
// so daily posts can keep writing ![alt](/images/blog/x.png) even when
// the site is served from a subpath (e.g. github.io/aryan).
export function remarkBaseImages(base) {
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
  return (tree) => {
    if (!prefix || prefix === '') return;
    const visit = (node) => {
      if (!node || typeof node !== 'object') return;
      if ((node.type === 'image' || node.type === 'definition') && typeof node.url === 'string' && node.url.startsWith('/')) {
        node.url = prefix + node.url;
      }
      (node.children || []).forEach(visit);
    };
    visit(tree);
  };
}
