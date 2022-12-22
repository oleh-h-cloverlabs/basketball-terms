export function countTime(days) {
  if (days < 1 || days > 7 || typeof days !== "number") return;
  const currentTime = Date.now();
  const dayDuration = 86400000;
  const definedTime = currentTime - dayDuration * days;

  return new Date(definedTime).toISOString();
}
