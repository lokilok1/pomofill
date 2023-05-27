export function formatTime(seconds) {
  return new Date(seconds * 1000).toISOString().slice(14, 19);
}
