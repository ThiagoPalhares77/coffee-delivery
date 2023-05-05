export function formatMoney(numero) {
  const brazilMoney = numero.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  return brazilMoney
}
