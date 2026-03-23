import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';


@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css'
})
export class SkillsPageComponent {

   skills: any[] = [
      {
        name: "Angular",
        description: "I develop scalable single-page applications with structured state management (services) and efficient, reactive UI rendering.",
        projects: [
          {
            name: "Silly Contracts",
            url: "https://github.com/FirestormPan/Silly_contracts",
            image: "assets/images/silly-contracts.jpg"
          },
          {
            name: "Fallworld",
            url: "https://github.com/FirestormPan/fallworld",
            image: "assets/images/fallworld.jpg"
          },
          {
            name: "This Page",
            url: "#",
            image: "assets/images/this-page.jpg"
          }
        ]
      },
      {
        name: "Html",
        description: "I structure semantic, accessible, and maintainable web pages using modern HTML standards.",
        projects: [
          {
            name: "Silly Contracts",
            url: "https://github.com/FirestormPan/Silly_contracts",
            image: "assets/images/silly-contracts.jpg"
          },
          {
            name: "Fallworld",
            url: "https://github.com/FirestormPan/fallworld",
            image: "assets/images/fallworld.jpg"
          },
          {
            name: "Searchbar React",
            url: "https://github.com/FirestormPan/Searchbar_React",
            image: "assets/images/searchbar-react.jpg"
          }
        ]
      },
      {
        name: "CSS",
        description: "I design and implement responsive UIs using modern CSS (Flexbox, Grid), while making the website feel interactive.",
        projects: [
          {
            name: "Silly Contracts",
            url: "https://github.com/FirestormPan/Silly_contracts",
            image: "assets/images/silly-contracts.jpg"
          },
          {
            name: "Fallworld",
            url: "https://github.com/FirestormPan/fallworld",
            image: "assets/images/fallworld.jpg"
          },
          {
            name: "Searchbar React",
            url: "https://github.com/FirestormPan/Searchbar_React",
            image: "assets/images/searchbar-react.jpg"
          }
        ]
      },
      {
        name: "Node JS/Express",
        description: "I build RESTful APIs that handle CRUD operations with clean, structured, and maintainable architecture.",
        projects: [
          {
            name: "Silly Contracts",
            url: "https://github.com/FirestormPan/Silly_contracts",
            image: "assets/images/silly-contracts.jpg"
          },
          {
            name: "Trifon Panorama Express",
            url: "https://github.com/FirestormPan/TrifonPanorama_Express",
            image: "assets/images/trifon-panorama.jpg"
          }
        ]
      },
      {
        name: "Java",
        description: "I write robust code using solid OOP principles and efficient data structures.",
        projects: [
          {
            name: "Solitaire Java",
            url: "https://github.com/FirestormPan/Solitair_Java",
            image: "assets/images/solitaire-java.jpg"
          },
          {
            name: "Monopoly Board Game",
            url: "https://github.com/FirestormPan/monopolyBoardGame",
            image: "assets/images/monopoly.jpg"
          },
          {
            name: "Score4 Java",
            url: "https://github.com/FirestormPan/Score4_Java",
            image: "assets/images/score4.jpg"
          }
        ]
      },
      {
        name: "Javascript/Typescript",
        description: "I build dynamic and interactive applications with asynchronous data handling.",
        projects: [
          {
            name: "Fallworld",
            url: "https://github.com/FirestormPan/fallworld",
            image: "assets/images/fallworld.jpg"
          },
          {
            name: "Silly Contracts",
            url: "https://github.com/FirestormPan/Silly_contracts",
            image: "assets/images/silly-contracts.jpg"
          },
          {
            name: "Searchbar React",
            url: "https://github.com/FirestormPan/Searchbar_React",
            image: "assets/images/searchbar-react.jpg"
          }
        ]
      },
      {
        name: "SQL",
        description: "I write queries for data retrieval and manipulation, to support backend features.",
        projects: [
          {
            name: "Silly Contracts",
            url: "https://github.com/FirestormPan/Silly_contracts",
            image: "assets/images/silly-contracts.jpg"
          }
        ]
      },
      {
        name: "Python & Pandas",
        description: "I use Python and pandas for data processing, analysis, and building data-driven features.",
        projects: [
          {
            name: "Clustering ML PCA",
            url: "https://github.com/FirestormPan/Clustering_ML_PCA",
            image: "assets/images/clustering.jpg"
          },
          {
            name: "Python Enn Ib2",
            url: "https://github.com/FirestormPan/Python_Enn_Ib2",
            image: "assets/images/python-enn.jpg"
          }
        ]
      },
      {
        name: "Data analysis and processing w/ machine learning",
        description: "I have trained ML models and preprocessed data. Also have used model evaluation with metrics.",
        projects: [
          {
            name: "Clustering ML PCA",
            url: "https://github.com/FirestormPan/Clustering_ML_PCA",
            image: "assets/images/clustering.jpg"
          },
          {
            name: "Python Enn Ib2",
            url: "https://github.com/FirestormPan/Python_Enn_Ib2",
            image: "assets/images/python-enn.jpg"
          }
        ]
      },
      {
        name: "React",
        description: "I build single-page applications, managing state and ensuring efficient, reactive UI updates.",
        projects: [
          {
            name: "Searchbar React",
            url: "https://github.com/FirestormPan/Searchbar_React",
            image: "assets/images/searchbar-react.jpg"
          }
        ]
      },
      {
        name: "Prolog",
        description: "Basic knowledge and understanding of logic programing.",
        projects: [
          {
            name: "Prolog Repo",
            url: "https://github.com/FirestormPan/Prolog",
            image: "assets/images/prolog.jpg"
          }
        ]
      },
      {
        name: "Wordpress & Woocommerce",
        description: "I make websites and e-shops with useful plug-ins. Easy control panel for clients.",
        projects: []
      },
      {
        name: "Puppeteer",
        description: "I simulate simple user behaviour for UI testing.",
        projects: []
      }
  ]
  
}
