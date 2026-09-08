import e01 from "@/assets/e01.jpg";
import e02 from "@/assets/e02.jpg";
import e03 from "@/assets/e03.jpg";
import e04 from "@/assets/e04.jpg";
import e05 from "@/assets/e05.jpg";
import e06 from "@/assets/e06.jpg";
import e07 from "@/assets/e07.jpg";
import e08 from "@/assets/e08.jpg";
import e09 from "@/assets/e09.jpg";
import e10 from "@/assets/e10.jpg";
import e11 from "@/assets/e11.jpg";
import e12 from "@/assets/e12.jpg";
import e13 from "@/assets/e13.jpg";
import e14 from "@/assets/e14.jpg";
import e15 from "@/assets/e15.jpg";

export type Encontro = {
  id: string;
  numero: string;
  titulo: string;
  clima: string;
  tempo: string;
  resumo: string;
  imagem: string;
  alt: string;
  receita: { nome: string; ingredientes: string[]; passos: string[] };
  brincadeira: { nome: string; comoJogar: string };
  bebida: string;
  trilha: string;
  ambiente: string;
};

export const encontros: Encontro[] = [
  {
    id: "massa-fresca",
    numero: "01",
    titulo: "Massa fresca à mão",
    clima: "Ritmo",
    tempo: "1h20",
    resumo: "Farinha na bancada, quatro mãos e uma massa que só dá certo devagar.",
    imagem: e01,
    alt: "Massa fresca em prato à luz de vela",
    receita: {
      nome: "Tagliatelle na manteiga de sálvia",
      ingredientes: [
        "300 g de farinha de trigo",
        "3 ovos inteiros",
        "1 pitada generosa de sal",
        "80 g de manteiga",
        "8 folhas de sálvia (ou alecrim)",
        "Parmesão ralado na hora",
      ],
      passos: [
        "Faça uma coroa com a farinha na bancada e quebre os ovos no centro.",
        "Misture com o garfo puxando a farinha das bordas até virar uma massa grossa.",
        "Sove por 10 minutos, revezando: cada um faz 5. Descanse 30 min embrulhada.",
        "Abra fina com rolo e corte em tiras de 1 cm.",
        "Cozinhe 2 a 3 minutos em água muito salgada.",
        "Doure a manteiga com a sálvia, junte a massa e finalize com parmesão.",
      ],
    },
    brincadeira: {
      nome: "Sova cronometrada",
      comoJogar:
        "Alternem a sova a cada 2 minutos. Quem estiver de fora precisa contar uma memória do casal antes do tempo acabar — se travar, sova mais 2 minutos.",
    },
    bebida: "Vinho tinto leve, servido quase fresco",
    trilha: "Jazz italiano em volume baixo",
    ambiente: "Farinha na bancada e nenhuma pressa de limpar",
  },
  {
    id: "risoto",
    numero: "02",
    titulo: "Risoto de cogumelos",
    clima: "Concentração",
    tempo: "45 min",
    resumo: "O prato que exige que alguém fique mexendo — e conversando.",
    imagem: e02,
    alt: "Risoto de cogumelos com sálvia em prato escuro",
    receita: {
      nome: "Risoto de cogumelos e sálvia",
      ingredientes: [
        "200 g de arroz arbóreo",
        "250 g de cogumelos (paris, shimeji ou shiitake)",
        "1 cebola pequena picada",
        "1 taça de vinho branco seco",
        "1 litro de caldo de legumes quente",
        "50 g de manteiga e parmesão a gosto",
      ],
      passos: [
        "Salteie os cogumelos em manteiga bem quente e reserve.",
        "Refogue a cebola, junte o arroz e mexa até ficar translúcido.",
        "Adicione o vinho e deixe evaporar.",
        "Vá acrescentando o caldo em conchas, mexendo sempre, por cerca de 18 minutos.",
        "Volte os cogumelos, desligue e finalize com manteiga gelada e parmesão.",
        "Descanse 2 minutos tampado antes de servir.",
      ],
    },
    brincadeira: {
      nome: "Uma pergunta por concha",
      comoJogar:
        "A cada concha de caldo adicionada, quem não está mexendo faz uma pergunta que nunca fez antes. São cerca de 10 perguntas até o risoto ficar pronto.",
    },
    bebida: "O mesmo vinho branco usado na panela",
    trilha: "Bossa nova instrumental",
    ambiente: "Luz baixa e a panela no centro da mesa",
  },
  {
    id: "pizza",
    numero: "03",
    titulo: "Pizza de fermentação lenta",
    clima: "Brincadeira",
    tempo: "24h (20 min de mão)",
    resumo: "A massa trabalha sozinha por um dia. Vocês só decidem a cobertura.",
    imagem: e03,
    alt: "Pizza artesanal com manjericão em tábua de madeira",
    receita: {
      nome: "Margherita de forno caseiro",
      ingredientes: [
        "500 g de farinha (tipo 00, se achar)",
        "325 ml de água gelada",
        "2 g de fermento biológico seco",
        "10 g de sal",
        "400 g de tomate pelado amassado",
        "Muçarela de búfala e manjericão",
      ],
    passos: [
        "Misture farinha, água e fermento até formar uma massa grudenta. Descanse 20 min.",
        "Junte o sal, sove 5 minutos e deixe na geladeira por 24 horas.",
        "Divida em duas bolas e deixe 2 horas fora da geladeira antes de assar.",
        "Abra com as mãos, sem rolo, deixando a borda grossa.",
        "Cubra com o tomate temperado só com sal e azeite.",
        "Asse no forno no máximo, com a assadeira pré-aquecida, por 8 a 10 minutos. Muçarela e manjericão no fim.",
      ],
    },
    brincadeira: {
      nome: "Pizza às cegas",
      comoJogar:
        "Cada um monta metade da pizza escondendo do outro. Depois de assada, cada um tenta adivinhar os três ingredientes que o outro usou.",
    },
    bebida: "Cerveja gelada ou um tinto simples",
    trilha: "Playlist de rádio antiga, dos anos 70",
    ambiente: "Prato no colo, sentados no chão da cozinha",
  },
  {
    id: "fondue",
    numero: "04",
    titulo: "Fondue de queijo",
    clima: "Aconchego",
    tempo: "30 min",
    resumo: "Uma panela só, dois garfos e a regra mais antiga do mundo.",
    imagem: e04,
    alt: "Panela de fondue de queijo com pães espetados",
    receita: {
      nome: "Fondue de gruyère e vinho branco",
      ingredientes: [
        "200 g de gruyère ralado",
        "200 g de emmental ralado",
        "200 ml de vinho branco seco",
        "1 dente de alho",
        "1 colher (chá) de amido de milho",
        "Pão rústico em cubos, batatas cozidas e brócolis",
      ],
      passos: [
        "Esfregue o alho no fundo da panela e descarte.",
        "Aqueça o vinho sem ferver.",
        "Adicione os queijos aos poucos, mexendo em oito, até derreter.",
        "Dissolva o amido em um pouco de vinho frio e junte para encorpar.",
        "Tempere com noz-moscada e pimenta-do-reino.",
        "Leve à mesa em fogo baixinho e mexa a cada rodada.",
      ],
    },
    brincadeira: {
      nome: "A regra do pão perdido",
      comoJogar:
        "Quem deixar o pão cair na panela paga uma prenda combinada antes: um elogio sincero, um beijo ou lavar a louça sozinho.",
    },
    bebida: "Vinho branco seco, o mesmo da panela",
    trilha: "Folk suave, violão e voz",
    ambiente: "Cobertor no sofá e a panela sobre um apoio",
  },
  {
    id: "tacos",
    numero: "05",
    titulo: "Tacos da meia-noite",
    clima: "Festa a dois",
    tempo: "40 min",
    resumo: "Barulho, limão espremido na mão e comida que se come em pé.",
    imagem: e05,
    alt: "Tacos com limão e coentro sobre mesa escura",
    receita: {
      nome: "Tacos de carne com pico de gallo",
      ingredientes: [
        "400 g de acém ou fraldinha em cubos pequenos",
        "1 colher (chá) de cominho e 1 de páprica defumada",
        "12 tortilhas de milho",
        "3 tomates, 1 cebola roxa e coentro picados",
        "2 limões e sal",
        "Creme azedo ou iogurte natural",
      ],
      passos: [
        "Tempere a carne com cominho, páprica e sal; deixe 15 minutos.",
        "Misture tomate, cebola, coentro, limão e sal para o pico de gallo.",
        "Grelhe a carne em frigideira bem quente, sem mexer demais.",
        "Aqueça as tortilhas na chama ou em frigideira seca.",
        "Monte: carne, pico de gallo, creme e mais limão.",
        "Coma em pé, na bancada.",
      ],
    },
    brincadeira: {
      nome: "Taco às escuras",
      comoJogar:
        "Um monta o taco do outro de olhos vendados. Quem recebe tenta acertar o que tem dentro; cada erro vale um taco a mais.",
    },
    bebida: "Limonada com gás ou cerveja bem gelada",
    trilha: "Cumbia e algo dançante",
    ambiente: "Luz acesa, música alta, guardanapo de papel",
  },
  {
    id: "ramen",
    numero: "06",
    titulo: "Ramen de madrugada",
    clima: "Silêncio bom",
    tempo: "50 min",
    resumo: "Duas tigelas fumegando às duas da manhã, sem falar muito.",
    imagem: e06,
    alt: "Tigela de ramen fumegante com ovo mole",
    receita: {
      nome: "Ramen rápido de missô",
      ingredientes: [
        "2 porções de macarrão para ramen",
        "1,2 litro de caldo de galinha",
        "2 colheres (sopa) de pasta de missô",
        "1 colher (sopa) de shoyu e 1 de óleo de gergelim",
        "2 ovos",
        "Cebolinha, alho e gengibre ralados, folhas de nori",
      ],
      passos: [
        "Cozinhe os ovos por 6h30 min e passe para a água gelada.",
        "Refogue alho e gengibre no óleo de gergelim.",
        "Junte o caldo, o shoyu e ferva; dissolva o missô fora do fogo.",
        "Cozinhe o macarrão à parte, no ponto da embalagem.",
        "Monte as tigelas: macarrão, caldo, ovo cortado ao meio, cebolinha e nori.",
        "Sirva imediatamente, bem quente.",
      ],
    },
    brincadeira: {
      nome: "Cinco minutos de silêncio",
      comoJogar:
        "Os primeiros cinco minutos são comidos em silêncio absoluto. Depois, cada um conta o que pensou nesse tempo.",
    },
    bebida: "Chá verde quente ou cerveja pequena",
    trilha: "City pop japonês, volume baixo",
    ambiente: "Só a luz do fogão acesa",
  },
  {
    id: "brunch",
    numero: "07",
    titulo: "Brunch tardio",
    clima: "Preguiça",
    tempo: "35 min",
    resumo: "Acordar tarde de propósito e transformar isso num plano.",
    imagem: e07,
    alt: "Mesa de brunch com panquecas, ovos e café",
    receita: {
      nome: "Panquecas fofas com ovos mexidos cremosos",
      ingredientes: [
        "200 g de farinha e 1 colher (sopa) de açúcar",
        "1 colher (chá) de fermento em pó",
        "250 ml de leite e 1 ovo",
        "30 g de manteiga derretida",
        "4 ovos para os mexidos, 1 colher de manteiga",
        "Mel ou frutas para servir",
      ],
      passos: [
        "Misture os secos; à parte, leite, ovo e manteiga.",
        "Junte os dois sem bater demais — grumos são bem-vindos.",
        "Frite conchas pequenas em frigideira antiaderente até borbulhar; vire uma vez.",
        "Bata os 4 ovos com sal e cozinhe em fogo bem baixo, mexendo sempre.",
        "Tire do fogo antes de parecerem prontos: eles terminam sozinhos.",
        "Sirva tudo junto, com café passado na hora.",
      ],
    },
    brincadeira: {
      nome: "Cardápio trocado",
      comoJogar:
        "Cada um pede o prato do outro sem dizer o que é. Quem cozinha só descobre quando serve — e não pode reclamar do pedido.",
    },
    bebida: "Café coado e suco de laranja",
    trilha: "Soul dos anos 60",
    ambiente: "Cortina aberta e nada marcado para o dia",
  },
  {
    id: "sushi",
    numero: "08",
    titulo: "Sushi em casa",
    clima: "Precisão",
    tempo: "1h",
    resumo: "Um arroz difícil, uma esteira e muita paciência dividida.",
    imagem: e08,
    alt: "Sushi e niguiri em tábua de ardósia",
    receita: {
      nome: "Uramaki de salmão e pepino",
      ingredientes: [
        "2 xícaras de arroz japonês",
        "60 ml de vinagre de arroz, 2 col. (sopa) de açúcar, 1 col. (chá) de sal",
        "200 g de salmão fresco próprio para consumo cru",
        "1 pepino japonês em tiras",
        "4 folhas de nori",
        "Shoyu, gengibre em conserva e wasabi",
      ],
      passos: [
        "Lave o arroz até a água sair clara e cozinhe com água na mesma medida.",
        "Aqueça vinagre, açúcar e sal até dissolver e misture ao arroz quente, cortando com a espátula.",
        "Espere o arroz chegar à temperatura ambiente.",
        "Sobre a esteira coberta com filme, espalhe o arroz na folha de nori.",
        "Recheie com salmão e pepino, enrole apertado e firme com a esteira.",
        "Corte com faca molhada em 8 pedaços.",
      ],
    },
    brincadeira: {
      nome: "Rolo às cegas",
      comoJogar:
        "Um enrola de olhos fechados enquanto o outro dá instruções apenas falando. Depois invertam. O rolo mais feio decide a sobremesa.",
    },
    bebida: "Chá gelado ou saquê",
    trilha: "Ambient minimalista",
    ambiente: "Bancada limpa, tudo em pequenas tigelas",
  },
  {
    id: "parrilla",
    numero: "09",
    titulo: "Parrilla na varanda",
    clima: "Fogo",
    tempo: "1h",
    resumo: "Carne, brasa e o tempo que ela leva. Ninguém tem pressa.",
    imagem: e09,
    alt: "Carne grelhada fatiada em tábua com brasas ao fundo",
    receita: {
      nome: "Bife ancho com chimichurri",
      ingredientes: [
        "2 bifes ancho de 300 g, grossos",
        "Sal grosso",
        "1 maço de salsinha picada",
        "3 dentes de alho, 1 colher (chá) de orégano seco",
        "100 ml de azeite e 2 colheres (sopa) de vinagre de vinho tinto",
        "Pimenta calabresa a gosto",
      ],
      passos: [
        "Tire a carne da geladeira 40 minutos antes.",
        "Misture salsinha, alho, orégano, azeite, vinagre e pimenta; descanse o chimichurri.",
        "Salgue a carne só na hora de ir ao fogo.",
        "Grelhe 4 a 5 minutos de cada lado em brasa forte, sem mexer.",
        "Descanse 8 minutos numa tábua antes de cortar.",
        "Fatie contra as fibras e regue com chimichurri.",
      ],
    },
    brincadeira: {
      nome: "Apostas na brasa",
      comoJogar:
        "Antes de cortar, cada um aposta no ponto da carne. Quem errar mais serve a próxima taça a noite inteira.",
    },
    bebida: "Malbec encorpado",
    trilha: "Tango moderno ou rock argentino",
    ambiente: "Varanda, luz de lampião, casaco leve",
  },
  {
    id: "torta-chocolate",
    numero: "10",
    titulo: "Torta de chocolate",
    clima: "Suspiro",
    tempo: "50 min + geladeira",
    resumo: "A sobremesa que se faz junto e se come com a mesma colher.",
    imagem: e10,
    alt: "Torta de chocolate com flor de sal à luz de velas",
    receita: {
      nome: "Torta de chocolate amargo com flor de sal",
      ingredientes: [
        "200 g de biscoito de chocolate triturado",
        "90 g de manteiga derretida",
        "300 g de chocolate 70% picado",
        "300 ml de creme de leite fresco",
        "1 pitada de flor de sal",
        "1 colher (chá) de essência de baunilha",
      ],
      passos: [
        "Misture biscoito e manteiga e forre o fundo de uma forma de fundo removível.",
        "Leve à geladeira por 20 minutos para firmar.",
        "Aqueça o creme de leite até quase ferver.",
        "Despeje sobre o chocolate picado, espere 2 minutos e mexa do centro para fora.",
        "Junte a baunilha, despeje sobre a base e bata a forma na bancada.",
        "Geladeira por 4 horas; flor de sal só na hora de servir.",
      ],
    },
    brincadeira: {
      nome: "Uma colher só",
      comoJogar:
        "A torta é comida com uma única colher, revezando. A cada garfada, quem come diz uma coisa que quer fazer com o outro nos próximos meses.",
    },
    bebida: "Café espresso ou vinho do Porto",
    trilha: "Piano lento",
    ambiente: "Luz apagada, só as velas da mesa",
  },
  {
    id: "sopa",
    numero: "11",
    titulo: "Sopa de abóbora",
    clima: "Refúgio",
    tempo: "40 min",
    resumo: "Dia frio, panela grande e uma conversa que rende.",
    imagem: e11,
    alt: "Sopa cremosa de abóbora em tigela rústica",
    receita: {
      nome: "Creme de abóbora com gengibre",
      ingredientes: [
        "800 g de abóbora cabotiá em cubos",
        "1 cebola e 2 dentes de alho",
        "1 pedaço de gengibre fresco (2 cm)",
        "800 ml de caldo de legumes",
        "100 ml de creme de leite",
        "Azeite, sal, pimenta e sementes de abóbora tostadas",
      ],
      passos: [
        "Refogue cebola, alho e gengibre no azeite até dourar.",
        "Junte a abóbora e deixe pegar cor por 5 minutos.",
        "Cubra com o caldo e cozinhe 20 minutos, até desmanchar.",
        "Bata tudo no liquidificador até ficar sedoso.",
        "Volte à panela, acerte o sal e junte o creme de leite.",
        "Sirva com sementes tostadas e um fio de azeite.",
      ],
    },
    brincadeira: {
      nome: "Mapa das lembranças",
      comoJogar:
        "Enquanto a sopa cozinha, cada um desenha num papel a planta da casa da infância e conta um cômodo. Vale rir dos desenhos.",
    },
    bebida: "Chá preto com laranja",
    trilha: "Chorinho ou piano de sala",
    ambiente: "Meias grossas, janela embaçada",
  },
  {
    id: "pao",
    numero: "12",
    titulo: "Pão na madrugada",
    clima: "Devagar",
    tempo: "18h (30 min de mão)",
    resumo: "Um pão que precisa dormir. Vocês também, entre uma dobra e outra.",
    imagem: e12,
    alt: "Pão rústico fatiado com manteiga em tábua",
    receita: {
      nome: "Pão sem sova de panela de ferro",
      ingredientes: [
        "500 g de farinha de trigo",
        "400 ml de água morna",
        "3 g de fermento biológico seco",
        "10 g de sal",
        "Farinha de arroz para polvilhar",
        "Manteiga com flor de sal para servir",
      ],
      passos: [
        "Misture tudo com uma colher até virar uma massa pegajosa e sem farinha seca.",
        "Cubra e deixe fermentar 12 a 18 horas em temperatura ambiente.",
        "Vire sobre a bancada enfarinhada e faça 4 dobras, formando uma bola.",
        "Descanse 1 hora enquanto o forno pré-aquece a 240 °C com a panela de ferro dentro.",
        "Coloque a massa na panela quente, faça um corte e tampe.",
        "Asse 30 min tampado e mais 15 destampado. Espere esfriar antes de cortar.",
      ],
    },
    brincadeira: {
      nome: "Carta na massa",
      comoJogar:
        "Antes de dormir, cada um escreve um bilhete e guarda embaixo do pote da massa. Os bilhetes só são lidos quando o pão sai do forno.",
    },
    bebida: "Café forte pela manhã",
    trilha: "Silêncio, e depois o rádio",
    ambiente: "Cozinha com cheiro de fermento e paciência",
  },
  {
    id: "ceviche",
    numero: "13",
    titulo: "Ceviche de verão",
    clima: "Frescor",
    tempo: "25 min",
    resumo: "Sem fogo. Só faca, limão e as mãos frias.",
    imagem: e13,
    alt: "Ceviche com cebola roxa e coentro em tigela",
    receita: {
      nome: "Ceviche clássico de peixe branco",
      ingredientes: [
        "400 g de peixe branco muito fresco (robalo ou tilápia) em cubos",
        "Suco de 6 limões",
        "1 cebola roxa em fatias finas",
        "1 pimenta dedo-de-moça sem sementes",
        "Coentro picado e sal",
        "Milho cozido ou batata-doce para acompanhar",
      ],
      passos: [
        "Deixe a cebola de molho em água gelada por 10 minutos e escorra.",
        "Corte o peixe em cubos regulares e tempere com sal.",
        "Junte o suco de limão gelado e a pimenta; espere 8 a 10 minutos.",
        "Misture a cebola e o coentro no fim, para não murchar.",
        "Prove e acerte sal e limão.",
        "Sirva imediatamente, bem gelado.",
      ],
    },
    brincadeira: {
      nome: "Prova cega de temperos",
      comoJogar:
        "Separem cinco temperos em potinhos. Cada um prova de olhos fechados e tenta adivinhar; quem errar mais escolhe o filme da noite — o outro escolhe a hora de desligar.",
    },
    bebida: "Cerveja gelada ou água com gás e limão",
    trilha: "Verão, algo com percussão leve",
    ambiente: "Janela aberta, ventilador ligado, pés descalços",
  },
  {
    id: "coq-au-vin",
    numero: "14",
    titulo: "Frango ao vinho",
    clima: "Ocasião",
    tempo: "1h30",
    resumo: "O prato de domingo que vale como declaração numa quarta-feira.",
    imagem: e14,
    alt: "Frango ao vinho tinto em panela de ferro com cogumelos",
    receita: {
      nome: "Coq au vin simplificado",
      ingredientes: [
        "6 coxas e sobrecoxas de frango",
        "150 g de bacon em cubos",
        "250 g de cogumelos paris",
        "1 cebola, 2 cenouras e 3 dentes de alho",
        "500 ml de vinho tinto seco e 200 ml de caldo de galinha",
        "Tomilho, louro, farinha de trigo, manteiga",
      ],
      passos: [
        "Doure o bacon na panela de ferro e reserve na gordura dele.",
        "Sele o frango dos dois lados, sem amontoar, e reserve.",
        "Refogue cebola, cenoura e alho; polvilhe 1 colher de farinha e mexa.",
        "Deglace com o vinho, raspando o fundo, e junte o caldo, o tomilho e o louro.",
        "Volte o frango e o bacon, tampe e cozinhe 45 minutos em fogo baixo.",
        "Salteie os cogumelos à parte na manteiga e junte nos últimos 10 minutos.",
      ],
    },
    brincadeira: {
      nome: "Brinde a cada capítulo",
      comoJogar:
        "A cada 15 minutos de cozimento, um dos dois faz um brinde contando algo que admira no outro. São seis brindes até o prato ficar pronto.",
    },
    bebida: "O mesmo tinto usado no molho",
    trilha: "Standards de jazz cantados",
    ambiente: "Mesa posta de verdade, com toalha",
  },
  {
    id: "cafe-na-cama",
    numero: "15",
    titulo: "Café da manhã na cama",
    clima: "Amanhecer",
    tempo: "25 min",
    resumo: "O encontro que fecha a série — e começa o dia seguinte.",
    imagem: e15,
    alt: "Bandeja de café da manhã na cama com luz da manhã",
    receita: {
      nome: "Bandeja de ovos pochê e torradas com abacate",
      ingredientes: [
        "4 ovos frescos",
        "1 colher (sopa) de vinagre branco",
        "4 fatias de pão rústico",
        "1 abacate maduro pequeno",
        "Limão, sal, pimenta e azeite",
        "Frutas da estação e café coado",
      ],
      passos: [
        "Aqueça água com vinagre até formar bolhas pequenas, sem ferver.",
        "Quebre cada ovo numa xícara e deslize na água em movimento circular.",
        "Cozinhe 3 minutos e retire com escumadeira sobre papel-toalha.",
        "Amasse o abacate com limão, sal e azeite e espalhe nas torradas.",
        "Coloque um ovo sobre cada torrada e tempere com pimenta.",
        "Monte a bandeja com as frutas e o café e leve para a cama.",
      ],
    },
    brincadeira: {
      nome: "Quem levanta primeiro",
      comoJogar:
        "Na noite anterior, tirem par ou ímpar: quem perder faz a bandeja. Quem ganhar precisa ficar na cama de olhos fechados até ser chamado.",
    },
    bebida: "Café coado e suco natural",
    trilha: "Nada, ou o barulho da rua acordando",
    ambiente: "Cortina meio aberta e celular longe da cama",
  },
];
