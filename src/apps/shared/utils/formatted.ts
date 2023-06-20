export function priceFormat(value: number) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}
