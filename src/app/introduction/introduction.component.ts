import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {
  jobTitles: string[] = ["Full Stack Developer", "Software Engineer","Frontend Developer", "Backend Developer", "Data Analyst", "Problem Solver" ]

  typewrittervisibility:boolean = true;
displayedTitle = "";
cursorVisible = true;

private jobIndex = 0;
private charIndex = 0;

ngOnInit() {
  this.startTyping();
  this.blinkCursor();
}

startTyping() {
  const typingSpeed = 80;
  const pauseTime = 1200;

  const typeTitle = () => {
    const currentWord = this.jobTitles[this.jobIndex];

    if (this.charIndex < currentWord.length) {
      this.charIndex++;
      this.displayedTitle = currentWord.substring(0, this.charIndex);

      setTimeout(typeTitle, typingSpeed);
    } else {
      // pause when word is fully typed
      setTimeout(() => {
        this.jobIndex = (this.jobIndex + 1) % this.jobTitles.length;
        this.charIndex = 0;
        this.displayedTitle = "";
        typeTitle();
      }, pauseTime);
    }
  };

  typeTitle();
}

blinkCursor() {
  setInterval(() => {
    this.cursorVisible = !this.cursorVisible;
  }, 500);
}
}

