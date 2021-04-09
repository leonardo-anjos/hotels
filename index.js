var readlineSync = require('readline-sync')

const hoteis = [
  {
    nome: 'Lakewood',
    classificacao: 3,
    taxaRegularSemana: 100,
    taxaRewardsSemana: 80,
    taxaRegularFimSemana: 90,
    taxaRewardsFimSemana: 80,
  },
  {
    nome: 'Bridgewood',
    classificacao: 4,
    taxaRegularSemana: 160,
    taxaRewardsSemana: 110,
    taxaRegularFimSemana: 60,
    taxaRewardsFimSemana: 50,
  },
  {
    nome: 'Ridgewood',
    classificacao: 5,
    taxaRegularSemana: 220,
    taxaRewardsSemana: 100,
    taxaRegularFimSemana: 150,
    taxaRewardsFimSemana: 40,
  }
]

console.log('Entrada 1:')
const inputData = readlineSync.question('');

const opcao = inputData.split(':', 1)[0];
if (opcao === 'Regular') {
  // regular
  const menorTaxaRegularSemana = Math.min(...hoteis.map(h => h.taxaRegularSemana))
  const menorTaxaRegularFimSemana = Math.min(...hoteis.map(h => h.taxaRegularFimSemana))
  const menorTaxaRegular = Math.min(menorTaxaRegularSemana, menorTaxaRegularFimSemana)

  let melhorHotel = '';

  if (menorTaxaRegularSemana === menorTaxaRegularFimSemana) {
    // melhor classificacao
    melhorHotel = hoteis.filter(h => Math.max(h.classificacao))
  } else {
    // mais barato
    melhorHotel = hoteis.filter(h => h.taxaRegularSemana === menorTaxaRegular || h.taxaRegularFimSemana === menorTaxaRegular)
  }

  console.log('Saída 1:', melhorHotel[0].nome)
} else {
  // rewards
  const menorTaxaRewardsSemana = Math.min(...hoteis.map(h => h.taxaRewardsSemana))
  const menorTaxaRewardsFimSemana = Math.min(...hoteis.map(h => h.taxaRewardsFimSemana))
  const menorTaxaRewards = Math.min(menorTaxaRewardsSemana, menorTaxaRewardsFimSemana) 
  
  let melhorHotel = '';

  if (menorTaxaRewardsSemana === menorTaxaRewardsFimSemana) {
    // melhor classificacao
    melhorHotel = hoteis.filter(h => Math.max(h.classificacao))
  } else {
    // mais barato
    melhorHotel = hoteis.filter(h => h.taxaRewardsSemana === menorTaxaRewards || h.taxaRewardsFimSemana === menorTaxaRewards)
  }

  console.log('Saída 1:', melhorHotel[0].nome)
}

