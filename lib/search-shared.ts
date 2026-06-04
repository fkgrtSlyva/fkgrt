export type SearchResult = {
  title: string;
  href: string;
  type: "page" | "post";
  excerpt: string;
};

export type SearchDocument = SearchResult & {
  searchableText: string;
};

export function searchDocuments(documents: SearchDocument[], query: string) {
  const terms = query
    .toLocaleLowerCase("uk-UA")
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);

  if (terms.length === 0) return [];

  return documents
    .map((document) => {
      const score = terms.reduce((total, term) => {
        if (document.title.toLocaleLowerCase("uk-UA").includes(term)) return total + 5;
        if (document.searchableText.includes(term)) return total + 1;
        return total;
      }, 0);

      return { document, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ document }) => ({
      title: document.title,
      href: document.href,
      type: document.type,
      excerpt: document.excerpt,
    }));
}
