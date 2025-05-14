import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceComponent implements OnInit {
  optionOne = { id: 0, text: 'Experiência', icon: 'frame_source' };
  options = [
    { id: 1, text: 'Superior', icon: 'school' },
    { id: 2, text: 'Técnico', icon: 'book_5' },
    { id: 3, text: 'Certificações', icon: 'bookmarks' },
  ];
  activeIndex = 0;
  experiencesArea = document.getElementsByClassName('box-experience');

  experiences = [
    {
      imageUrl: '../../../assets/images/alpe-logo.png',
      title: 'Desenvolvedor Front-end Jr',
      subtitle: 'ALPE',
      timing: 'Set 2021 - Nov 2023 (2 Anos)',
      local: 'São Paulo - SP - Brasil',
      text: `Comecei a implementar fluxos mais complexos e completos nos
            projetos, e então passei a me envolver mais nas regras de negócios
            tomando conta do portal da empresa junto ao site institucional para
            implementar novas funcionalidades e trabalhando em manutenções para
            manter o funcionamento correto, recebi mais responsabilidades como
            por exemplo, auxiliar no desenvolvimento técnico e profissionaal de
            novos estagiários.`,
    },
    {
      imageUrl: '../../../assets/images/alpe-logo.png',
      title: 'Estagiário UI/UX',
      subtitle: 'ALPE',
      timing: 'Set 2020 - Set 2021 (1 Ano)',
      local: 'São Paulo - SP - Brasil',
      text: `Meu primeiro contato com um produto no mundo corporativo, em um
              time que apoiava todas squads na ideação de novos projetos, minha
              primeira tarefa foi ligar para os clientes aplicando uma
              entrevista para analisar e mapear suas dores, criando algo que de
              fato supria suas necessidades. Ainda como estagiário, tive contato
              também com o desenvolvimento web Angular nos projetos que
              posteriormente seriam minha responsabilidade.`,
    },
  ];

  superior = [
    {
      imageUrl: '../../../assets/images/sptech-logo.png',
      title: 'Análise e desenvolvimento de sistemas',
      subtitle: 'SPTECH - Graduação',
      timing: 'Jan 2020 - Dez 2021 (2 Anos)',
      local: 'São Paulo - SP - Brasil',
      text: `Durante o curso de Análise e Desenvolvimento de Sistemas na São
            Paulo Tech School, pude adquirir uma base sólida em programação, a
            metodologia prática foi essencial para o desenvolvimento das minhas
            habilidades, com foco em resolução de problemas reais. Tive a
            oportunidade de trabalhar com diversas tecnologias e frameworks
            atuais, como Angular, o que me preparou para o mercado,e a interação
            professores qualificados me proporcionou um ambiente colaborativo e
            desafiador.`,
    },
    {
      imageUrl: '../../../assets/images/sptech-logo.png',
      title: 'Liderança e Gestão em tecnologia',
      subtitle: 'SPTECH - Pós-Graduação',
      timing: 'Out 2022 - Nov 2023 (1 Ano)',
      local: 'São Paulo - SP - Brasil',
      text: `A pós-graduação em Liderança e Gestão em Tecnologia na São Paulo
            Tech School foi transformadora. Aprendi a gerenciar equipes e
            projetos tecnológicos com eficácia, além de desenvolver habilidades
            de comunicação e tomada de decisão. O curso me proporcionou insights
            sobre estratégias de liderança e como aplicar metodologias ágeis no
            dia a dia. A troca de experiências com profissionais do mercado foi
            enriquecedora e me preparou para desafios em cargos de liderança na
            área de TI.`,
    },
  ];

  tecnic = [
    {
      imageUrl: '../../../assets/images/logo-etec.png',
      title: 'Desenvolvimento de Sistemas',
      subtitle: 'ETEC de Guaianazes - Técnico',
      timing: 'Out 2018 - Dez 2019 (1 ano e 6 meses)',
      local: 'São Paulo - SP - Brasil',
      text: `O curso técnico de Desenvolvimento de Sistemas na ETEC de Guaianazes
            me proporcionou uma base sólida em programação. Durante o curso, aprendi diversas
            linguagens e conceitos fundamentais, o que facilitou meu entendimento de algoritmos
            e desenvolvimento de software. As atividades práticas foram essenciais para aplicar
            os conhecimentos e desenvolver habilidades técnicas. O suporte dos professores
            e o ambiente de aprendizado colaborativo ajudaram a aprimorar minhas capacidades.`,
    },
    {
      imageUrl: '../../../assets/images/logo-etec.png',
      title: 'Informática',
      subtitle: 'ETEC de Guaianazes - Técnico',
      timing: 'Out 2016 - Dez 2017 (1 ano e 6 meses)',
      local: 'São Paulo - SP - Brasil',
      text: `Cursar o técnico em Informática na ETEC de Guaianazes foi uma vivência muito positiva. 
            O curso abrangeu desde fundamentos de redes e hardware até introduções à programação, o que
            me deu uma visão ampla da área de TI. A prática constante e os projetos desenvolvidos
            ao longo das aulas foram essenciais para o aprendizado. O suporte dos professores,
            sempre dispostos a ajudar, tornou o processo ainda mais enriquecedor.`,
    },
  ];

  certifications = [
    {
      imageUrl: '../../../assets/images/logo-udemy.png',
      title: 'Aprendendo Redux utilizano NGRX com Angular 13+',
      subtitle: 'Instrutor: Fredddy Cristian Maldonado Parra',
      timing: 'Certificado de conclusão',
      local: '2024 - 4 horas totais',
      text: `Implementação de gerenciamento de estado em projetos Angular utilizando a biblioteca NGRX, 
            focado em conceitos como actions, reducers, effects e selectors.`,
    },
    {
      imageUrl: '../../../assets/images/cellep-logo.webp',
      title: 'Encoding Essential Skills UI/UX',
      subtitle: 'Diretora: Patrícia McKay Aronis',
      timing: 'Certificado de conclusão',
      local: '2019 - 32 horas totais',
      text: `A certificação básica de UI/UX de 32 horas na Estação Hack foi uma experiência transformadora. 
            O curso abordou desde os princípios fundamentais de design até as melhores práticas para criar interfaces
            intuitivas e agradáveis. Com atividades práticas, pude aplicar conceitos de usabilidade e design centrado
            no usuário em projetos reais. A interação com colegas e instrutores foi enriquecedora, proporcionando
            feedback constante e novas perspectivas.`,
    },
    {
      imageUrl: '../../../assets/images/madcode-logo.png',
      title: 'App Development Kotlin',
      subtitle: 'Diretora: Patrícia McKay Aronis',
      timing: 'Certificado de conclusão',
      local: '2019 - 32 horas totais',
      text: `O curso proporcionou uma imersão prática e teórica na linguagem, com foco em desenvolver
            habilidades desde o básico até a criação de pequenas aplicações. A didática clara e os exercícios
            desafiadores foram fundamentais para consolidar o conhecimento. Além disso, o ambiente colaborativo
            da Estação Hack incentivou a troca de experiências e o aprendizado em grupo. Foi uma excelente oportunidade
            para fortalecer a base em Kotlin e abrir portas para projetos futuros.`,
    },
  ];

  arrowVisible = true;
  faChevronDown = faChevronDown;

  ngOnInit(): void {
    this.showContent(0);
  }

  showContent(id: any) {
    this.activeIndex = id;
    Array.from(this.experiencesArea).forEach((item, i) => {
      if (id == i) {
        item.classList.add('show-experience');
      } else {
        item.classList.remove('show-experience');
      }
    });
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    if (element.scrollTop === 0) {
      this.arrowVisible = true;
    } else {
      this.arrowVisible = false;
    }
  }
}
