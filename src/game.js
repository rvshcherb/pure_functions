export default function game(data) {
  switch (true) {
    case data.health > 50:
      return 'healthy';
    case data.health > 15:
      return 'wounded';
    default:
      return 'critical';
  }
}
