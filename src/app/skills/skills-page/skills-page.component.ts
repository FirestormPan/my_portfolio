import { Component, ElementRef, ViewChild } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';


@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css'
})
export class SkillsPageComponent {

  //movable positioning 
  left = 0;
  top = 0; 

  fullwidth = parent.innerWidth;

  ngAfterViewInit() {

  }


  onMouseMove(event: MouseEvent) {

    //mouse position
    let x = event.clientX;
    let y = event.clientY;

    this.left = x/15
    this.top = y/15
  }

  
  projects: Map<string, any> = new Map([
    ["Fallworld", {
            name: "Fallworld",
            url: "https://github.com/FirestormPan/fallworld",
            image: "assets/images/fallworld.jpg"
          }],
    ["Silly Contracts", {
            name: "Silly Contracts",
            url: "https://github.com/FirestormPan/Silly_contracts",
            image: "assets/images/silly-contracts.jpg"
          }],
    ["Searchbar React", {
            name: "Searchbar React",
            url: "https://github.com/FirestormPan/Searchbar_React",
            image: "assets/images/searchbar-react.jpg"
          }],
    ["Trifon Panorama", {
            name: "Trifon Panorama Express",
            url: "https://github.com/FirestormPan/TrifonPanorama_Express",
            image: "assets/images/trifon-panorama.jpg"
          }],
    ["Solitare Java", {
            name: "Solitaire Java",
            url: "https://github.com/FirestormPan/Solitair_Java",
            image: "assets/images/solitaire.png"
          }],
    ["Monopoly Board Game", {
            name: "Monopoly Board Game",
            url: "https://github.com/FirestormPan/monopolyBoardGame",
            image: "assets/images/monopoly.png"
          }],
    ["Score4 Java", {
            name: "Score4 Java",
            url: "https://github.com/FirestormPan/Score4_Java",
            image: "assets/images/score4.png"
          }],
    ["Clustering ML PCA", {
            name: "Clustering ML PCA",
            url: "https://github.com/FirestormPan/Clustering_ML_PCA",
            image: "assets/images/Clustering_ML_PCA.png"
          }],
    ["Python Enn Ib2",  {
            name: "Python Enn Ib2",
            url: "https://github.com/FirestormPan/Python_Enn_Ib2",
            image: "assets/images/Enn_Ib2.png"
          }]
          

  ])


  skills: any[] = [
      {
        name: "Angular",
        description: "I develop scalable single-page applications with structured state management (services) and efficient, reactive UI rendering.",
        projects: [
          this.projects.get("Silly Contracts"),
          this.projects.get("Fallworld"),
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
          this.projects.get("Silly Contracts"),
          this.projects.get("Fallworld"),
          this.projects.get("Searchbar React")
        ]
      },
      {
        name: "CSS",
        description: "I design and implement responsive UIs using modern CSS (Flexbox, Grid), while making the website feel interactive.",
        projects: [
         this.projects.get("Silly Contracts"),
          this.projects.get("Fallworld"),
          this.projects.get("Searchbar React")
        ]
      },
      {
        name: "Node JS/Express",
        description: "I build RESTful APIs that handle CRUD operations with clean, structured, and maintainable architecture.",
        projects: [
          this.projects.get("Silly Contracts"),
          this.projects.get("Trifon Panorama")
        ]
      },
      {
        name: "Java",
        description: "I write robust code using solid OOP principles and efficient data structures.",
        projects: [
          this.projects.get("Solitare Java"),
          this.projects.get("Monopoly Board Game"),
          this.projects.get("Score4 Java")
        ]
      },
      {
        name: "Javascript/Typescript",
        description: "I build dynamic and interactive applications with asynchronous data handling.",
        projects: [
          this.projects.get("Fallworld"),
          this.projects.get("Silly Contracts"),
          this.projects.get("Searchbar React")
        ]
      },
      {
        name: "SQL",
        description: "I write queries for data retrieval and manipulation, to support backend features.",
        projects: [
          this.projects.get("Silly Contracts")
        ]
      },
      {
        name: "Python & Pandas",
        description: "I use Python and pandas for data processing, analysis, and building data-driven features.",
        projects: [
          this.projects.get("Clustering ML PCA"),
          this.projects.get("Python Enn Ib2")
        ]
      },
      {
        name: "Data analysis and processing w/ machine learning",
        description: "I have trained ML models and preprocessed data. Also have used model evaluation with metrics.",
        projects: [
          this.projects.get("Clustering ML PCA"),
          this.projects.get("Python Enn Ib2")
        ]
      },
      {
        name: "React",
        description: "I build single-page applications, managing state and ensuring efficient, reactive UI updates.",
        projects: [
          this.projects.get("Searchbar React")
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
