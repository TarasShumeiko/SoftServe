import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', id: 1 },
    { name: 'CSS', id: 2 },
    { name: 'JavaScript', id: 3 },
    { name: 'SASS', id: 4 },
    { name: 'React', id: 5 },
    { name: 'Redux', id: 6 },
    { name: 'Angular', id: 7 },
    { name: 'Gulp', id: 8 },
    { name: 'Webpack', id: 9 },
    { name: 'Git', id: 10 },
    { name: 'Node.js', id: 11 },
    { name: 'MongoDB', id: 12 },
  ];

  name = '';

  removeSkill(id) {
    this.skills = this.skills.filter(skill => skill.id !== id)
  }

  addSkill() {
    const skill = {
      name: this.name,
      id: Date.now()
    };
    this.skills.push(skill);
    this.name = '';
  }
}
