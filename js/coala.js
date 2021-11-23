function texto(elemento, substituir) {
    document.querySelector(elemento).textContent = substituir;
}

texto("h1", "Coala");
texto("p", "Os coalas são animais mamíferos do grupo dos marsupiais que vivem na Austrália. Ficam a maior parte do tempo em cima de árvores, ocorrendo em locais ricos em espécies de eucalipto, seu principal alimento, de onde retiram toda a água de que precisam para viver. De acordo com estudos, coalas dormem por pelo menos 14 horas por dia e passam outras cinco descansando. Tudo por conta de sua dieta de folhas de eucalipto, que demoram a serem digeridas e oferecem pouca energia. Além disso, acredita-se ainda que os animais passam boa parte de seus dias abraçados nos troncos de árvore com o intuito de se refrescar, principalmente no verão.");
texto("h2", "Comportamentos e expressões com as quais me identifico");