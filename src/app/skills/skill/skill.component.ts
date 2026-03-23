import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  @Input() name: string ='';
  @Input() description: string = '';
  @Input() projects: any[] = [];

  projectsBackground = ''
  isShowingProjects = signal(false);

  toggleProjects() {
    this.isShowingProjects.update(v => !v)
  }

  setProjectsBackground(imgUrl: string){
    this.projectsBackground = imgUrl; 
  }

  resetProjectsBackground(){
    this.projectsBackground = '';
  }

}
