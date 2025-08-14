export function isMagnetLink(link: string): boolean {
  return /^magnet:\?xt=urn:btih:([a-fA-F0-9]{40}|[A-Z2-7]{32})(?:&.*)?$/i.test(link.trim());
}
