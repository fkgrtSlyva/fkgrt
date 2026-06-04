export function assetPath(path: string | null | undefined) {
  if (!path) return "";

  if (/^(?:[a-z][a-z0-9+.-]*:|#)/i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${normalizedPath}`;
}
