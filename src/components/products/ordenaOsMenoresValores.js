function ordenacaoDeValores() {
  const valores = [1, 2, 3, 4, 5, 34, 463, 352, 324, 12];
  const maxValue = Math.max(...valores);
  let resultado = valores.sort((a, b) => a - b);

  return resultado;
}
export default ordenacaoDeValores;
