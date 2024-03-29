import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Não de banho no seu gato! Mas se precisar nós damos!",
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas.",
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano",
  },
];

function Servicos() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Teste</Text>
    </SafeAreaView>
  )
}

export default Servicos;
