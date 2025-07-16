import { Component, ViewEncapsulation } from '@angular/core';
import * as bootstrap from 'bootstrap';
import {
  faAndroid,
  faFigma,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faJs, faCss3 } from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faLocationDot,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      imageUrl: 'assets/images/saferoute-project.png',
      imageCard: 'assets/images/safe-route-mockup.png',
      title: 'SafeRoute é um app para rotas seguras',
      name: 'Safe',
      subname: 'Route',
      icon: 'assets/images/logo-saferoute.png',
      urlProject: 'https://gustavo-henrique1.github.io/secret-word/',
      icons: [
        { icon: faAndroid, name: 'Kotlin' },
        { icon: faJs, name: 'JavaScript' },
        { icon: faCss3, name: 'CSS' },
        { icon: faDatabase, name: 'MySQL' },
        { icon: faLocationDot, name: 'Geolocalização' },
      ],
      description:
        'O projeto Safe Route visa promover a locomoção segura para mulheres. Através de uma aplicação web, usuárias podem se cadastrar, criar rotas com o Google Maps ou participar de grupos de locomoção com outras mulheres. Inspirado por experiências pessoais e pesquisas, o sistema busca minimizar os riscos enfrentados no dia a dia, oferecendo mais segurança, autonomia e tranquilidade para todas.',
    },
    {
      id: 2,
      imageUrl: 'assets/images/consultacnpj-project.png',
      imageCard: 'assets/images/cnpj-mockup.png',
      title: 'CNPJ Serch é um site para encontrar dados sobre empresas',
      name: 'CNPJ',
      subname: 'Search',
      icon: 'assets/images/logo-saferoute.png',
      urlProject: 'https://gustavo-henrique1.github.io/consultar-cnpj/',
      icons: [
        { icon: faJs, name: 'JavaScript' },
        { icon: faCss3, name: 'CSS' },
        { icon: faChartBar, name: 'Rest API' },
      ],
      description:
        'O CNPJ Search é uma ferramenta online para consulta de dados de empresas brasileiras usando o número do CNPJ. Ao pesquisar, o sistema exibe informações como nome empresarial, razão social, atividade principal, telefone, e-mail, endereço completo, situação cadastral, data de abertura e também a lista de sócios da empresa. A plataforma facilita o acesso a dados de forma segura e acessível.',
    },
    {
      id: 3,
      imageUrl: 'assets/images/secret-word-project.png',
      imageCard: 'assets/images/secret-mockup.png',
      title: 'Secret Word é para você se divertir',
      name: 'Secret',
      subname: 'Word',
      icon: 'assets/images/logo-saferoute.png',
      urlProject: 'https://gustavo-henrique1.github.io/secret-word/',
      icons: [
        { icon: faReact, name: 'React' },
        { icon: faCss3, name: 'CSS' },
      ],
      description:
        'Secret Word é um jogo online desenvolvido em React onde o objetivo é adivinhar a palavra correta com base em uma dica fornecida. O jogador tem um número limitado de tentativas para acertar as letras da palavra e somar pontos a cada acerto. O sistema mostra o progresso visualmente e exibe as letras utilizadas. A interface é intuitiva e divertida.',
    },
    {
      id: 4,
      imageUrl: 'assets/images/zen-app-project.png',
      imageCard: 'assets/images/zen-app-mockup.png',
      title: 'ZenApp é um app para te deixar calmo',
      name: 'Zen',
      subname: 'App',
      icon: 'assets/images/logo-saferoute.png',
      urlProject:
        'https://www.figma.com/proto/geS5Vz006pBW21TH4zmLg2/Untitled?node-id=6-3936&p=f&t=HvLx3XxY4wrWwuL2-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A3936',
      icons: [{ icon: faFigma, name: 'Figma' }],
      description:
        'Projeto desenvolvido durante meus estudos de UI/UX Design no Figma. A proposta é criar uma experiência de bem-estar digital, onde o usuário possa acompanhar seu humor, hábitos e rotinas de autocuidado. Com interface leve, intuitiva e focada no usuário, o app visa promover equilíbrio emocional e saúde mental por meio de recursos como diários de humor, meditações guiadas e lembretes de hábitos saudáveis.',
    },
  ];
  selectedProject: any = {};

  goToLink() {
    window.open(this.selectedProject.urlProject, '_blank');
  }

  shareProject(): void {
    const url = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: 'Confira este projeto!',
          text: 'Dê uma olhada nesse projeto incrível:',
          url: url,
        })
        .catch((error) => console.error('Erro ao compartilhar', error));
    } else {
      navigator.clipboard.writeText(url).then(
        () => {
          alert('Link copiado para a área de transferência!');
        },
        () => {
          alert('Não foi possível copiar o link.');
        }
      );
    }
  }

  openModal(project: any) {
    this.selectedProject = project;
    const modalElement = document.getElementById('projectModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }
}
