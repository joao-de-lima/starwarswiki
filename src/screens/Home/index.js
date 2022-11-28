import React from 'react'
import { ScreenScrollContainer, HomeList, Hero, Container, Loader } from '~/components'

const FAKE_DATA_FILMS = [
  {
    id: 0,
    image_url:
      'https://static.wikia.nocookie.net/ptstarwars/images/0/05/Episodio1.png/revision/latest?cb=20200323171122',
    title: 'Episódio I',
    type: 'Filme',
    subtitle: 'A Ameaça Fantasma',
    description:
      'Obi-Wan e seu mentor embarcam em uma perigosa aventura na tentativa de salvar o planeta das garras de Darth Sidious. Durante a viagem, eles conhecem um habilidoso menino e decidem treiná-lo para se tornar um Jedi. Mas o tempo irá revelar que as coisas nem sempre são o que aparentam ser.',
  },
  {
    id: 1,
    image_url:
      'https://static.wikia.nocookie.net/ptstarwars/images/4/41/Ataque_dos_clones_p%C3%B4ster.png/revision/latest?cb=20200325152514',
    title: 'Star Wars Episódio II',
    type: 'Filme',
    subtitle: 'Ataque dos Clones',
    description:
      'Tentado por promessas de poder, Anakin Skywalker se aproxima de Darth Sidious e participa de um plano para acabar com os Cavaleiros Jedi.',
  },
  {
    id: 2,
    image_url:
      'https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg',
    title: 'Star Wars Episódio III',
    type: 'Filme',
    subtitle: 'A Vingança dos Sith',
    description:
      'As Guerras Clônicas estão em pleno andamento e Anakin Skywalker mantém um elo de lealdade com Palpatine, ao mesmo tempo em que luta para que seu casamento com Padmé Amidala não seja afetado por esta situação. Seduzido por promessas de poder, Anakin se aproxima cada vez mais de Darth Sidious até se tornar o temível Darth Vader. Juntos eles tramam um plano para aniquilar de uma vez por todas com os cavaleiros jedi.',
  },
  {
    id: 3,
    image_url:
      'https://2.bp.blogspot.com/-tHtl2N1DMAE/Vyn9drdDmxI/AAAAAAAAXeU/CHa5x9ltKvsoI-PVDNw_51GQRZ_Ld_CpwCLcB/s1600/Star-Wars-IV-poster.jpg',
    title: 'Star Wars Episódio IV',
    type: 'Filme',
    subtitle: 'Uma Nova Esperança',
    description:
      'A princesa Leia é mantida refém pelas forças imperiais comandadas por Darth Vader. Luke Skywalker e o capitão Han Solo precisam libertá-la e restaurar a liberdade e a justiça na galáxia.',
  },
  {
    id: 4,
    image_url:
      'https://br.web.img3.acsta.net/medias/nmedia/18/72/73/89/20535463.jpg',
    title: 'Star Wars Episódio V',
    type: 'Filme',
    subtitle: 'O Império Contra-Ataca',
    description:
      'Yoda treina Luke Skywalker para ser um cavaleiro Jedi. Han Solo corteja a Princesa Leia enquanto Darth Vader retorna para combater as forças rebeldes que tentam salvar a galáxia.',
  },
  {
    id: 5,
    image_url:
      'https://static.wikia.nocookie.net/dublagem/images/e/ec/LlaJ35p5e23ygDbqd0H3otJLWsA.jpg/revision/latest?cb=20220625193023&path-prefix=pt-br',
    title: 'Star Wars Episódio VI',
    type: 'Filme',
    subtitle: 'O Retorno de Jedi',
    description:
      'Luke Skywalker e seus amigos viajam para Tatooine e salvam seu amigo Han Solo do lorde do crime Jabba o Hutt. O Império Galático começou a construção de uma segunda Estrela da Morte, visando aniquilar a Aliança Rebelde, mas seu término está comprometido pela Frota Rebelde, que insiste em dar um fim ao Império.',
  },
  {
    id: 6,
    image_url:
      'https://vertentesdocinema.com/wp-content/uploads/2017/01/Star-Wars-O-Despertar-da-Forca-2-scaled.jpg',
    title: 'Star Wars Episódio VII',
    type: 'Filme',
    subtitle: 'O Despertar da Força',
    description:
      'A queda de Darth Vader e do Império levou ao surgimento de uma nova força sombria: a Primeira Ordem. Eles procuram o jedi Luke Skywalker, desaparecido. A resistência tenta desesperadamente encontrá-lo antes para salvar a galáxia.',
  },
  {
    id: 7,
    image_url:
      'https://topdezfilmes.info/wp-content/uploads/2018/03/stAR-v.jpg',
    title: 'Star Wars Episódio VIII',
    type: 'Filme',
    subtitle: 'Os Últimos Jedi',
    description:
      'A tranquila e solitária vida de Luke Skywalker sofre uma reviravolta quando ele conhece Rey, uma jovem que mostra fortes sinais da Força. O desejo dela de aprender o estilo dos Jedi força Luke a tomar uma decisão que mudará sua vida para sempre.',
  },
  {
    id: 8,
    image_url:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1245DFC0374CC172BBEC725191C5CD4206E7D62C88EB8BC5AB4102A403C5F98A/scale?width=506&aspectRatio=2.00&format=jpeg',
    title: 'Star Wars Episódio IX',
    type: 'Filme',
    subtitle: 'A Ascensão Skywalker',
    description:
      'Com o retorno do Imperador Palpatine, a Resistência toma a frente da batalha. Treinando para ser uma completa Jedi, Rey se encontra em conflito com passado e futuro, e teme pelas respostas que pode conseguir com Kylo Ren.',
  },
]

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    image_url:
      'https://www.tribunadosertao.com.br/wp-content/uploads/2022/09/darthvaderfortnite.jpg',
    title: 'Darth Vader',
    type: 'Personagem',
    subtitle: 'James Earl Jones',
    description:
      'Darth Vader é um personagem fictício da franquia Star Wars. O personagem é o antagonista central da trilogia original e, como Anakin Skywalker, é um dos principais protagonistas de toda a trilogia prequela. O criador de Star Wars, George Lucas, se referiu coletivamente aos seis primeiros filmes episódicos da franquia como "a tragédia de Darth Vader". Ele se tornou um dos vilões mais icônicos da cultura popular e foi listado entre os maiores vilões e personagens fictícios de todos os tempos.',
  },
  {
    id: 1,
    image_url:
      'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2020/02/desafio-jedi-de-mestre-yoda-consertar-as-frases-consegue-vocecc82.jpg?quality=100&strip=info',
    title: 'Yoda',
    type: 'Personagem',
    subtitle: 'Frank Oz',
    description:
      'Yoda é um personagem fictício no universo de Star Wars, criado por George Lucas. Ele aparece em seis filmes da saga, todos os filmes da trilogia prequela e da original exceto pelo episódio 4, e também aparece no episódio 8. Frank Oz, célebre criador dos Muppets, é o responsável pela sua voz.',
  },
  {
    id: 2,
    image_url:
      'https://upload.wikimedia.org/wikipedia/pt/c/cf/LukeTatooine.jpg',
    title: 'Luke Skywalker',
    type: 'Personagem',
    subtitle: 'Mark Hamill',
    description:
      'Luke Skywalker é o protagonista da trilogia original da série Star Wars, faz participação em Star Wars: O Despertar da Força em Star Wars: Os Últimos Jedi. É interpretado pelo ator norte-americano Mark Hamill.',
  },
  {
    id: 4,
    image_url:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg/220px-Princess_Leia%27s_characteristic_hairstyle.jpg',
    title: 'Leia Organa',
    type: 'Personagem',
    subtitle: 'Carrie Fisher',
    description:
      'Princesa Leia Organa ou General Leia Organa é uma personagem fictícia da série de filmes Star Wars que foi interpretada por Carrie Fisher nos filmes Star Wars.',
  },
  {
    id: 5,
    image_url:
      'https://super.abril.com.br/wp-content/uploads/2022/06/AMP_obiwan8.png',
    title: 'Obi-Wan Kenobi',
    type: 'Personagem',
    subtitle: 'Alec Guinness',
    description:
      'Obi-Wan Kenobi é um personagem fictício da saga de ficção científica Star Wars, que participou dos seis primeiros filmes. Na trilogia original, foi interpretado por Sir Alec Guiness e nos outros três por Ewan McGregor, que interpretou a versão jovem do personagem.',
  },
  {
    id: 6,
    image_url:
      'https://st.depositphotos.com/1814084/1671/i/450/depositphotos_16717145-stock-photo-33rd-afi-life-achievement-award.jpg',
    title: 'Chewbacca',
    type: 'Personagem',
    subtitle: 'Peter Mayhew',
    description:
      'Na série Star Wars, Chewbacca — apelido: Chewie — é o copiloto da nave Millennium Falcon e o melhor amigo de Han Solo, e um alienígena da raça Wookiee, oriundo do planeta Kashyyyk. Tendo participado de sete dos nove filmes da franquia. Chewie é um excelente mecânico, muito sábio e temperamental.',
  },
  {
    id: 7,
    image_url:
      'https://static.wikia.nocookie.net/ptstarwars/images/0/01/Hansoloprofile.jpg/revision/latest?cb=20120222133702',
    title: 'Han Solo',
    type: 'Personagem',
    subtitle: 'Harrison Ford',
    description:
      'Han Solo é um personagem fictício, um dos protagonistas dos livros e filmes de ficção científica da série Star Wars.',
  },
  {
    id: 8,
    image_url:
      'https://ironstudios.vteximg.com.br/arquivos/ids/323848-1000-1000/257037_0.jpg?v=637955625929430000',
    title: 'R2-D2',
    type: 'Personagem',
    subtitle: 'Kenny Baker',
    description:
      'R2-D2 é um pequeno robô e um dos principais personagens da saga Star Wars. Ele é um droide astromecânico, responsável por manutenção e navegação de astronaves. Fala uma "linguagem" incompreensível, de bipes e sons eletrônicos.',
  },
  {
    id: 9,
    image_url: 'https://upload.wikimedia.org/wikipedia/pt/6/66/C-3PO.jpg',
    title: 'C-3PO',
    type: 'Personagem',
    subtitle: 'Anthony Daniels',
    description:
      'O C-3PO é um androide do mundo fictício de Star Wars. É um "droide de protocolo" fluente em 6 milhões de meios de comunicação. Foi inspirado na robô Maschinenmensch de Metrópolis.',
  },
]



export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          title : 'Episódio I',
          subtitle: 'A Ameaça Fantasma',
          type: 'Filme',
          image_url:
            'https://static.wikia.nocookie.net/ptstarwars/images/0/05/Episodio1.png/revision/latest?cb=20200323171122',
        }}
      />
      <HomeList title="Filmes" data={FAKE_DATA_FILMS} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERES} />
    </ScreenScrollContainer>
  )

  if (loading) {
    return (
      <Container align="center" justify="center">
        <Loader />
      </Container>
    )
  }
}

