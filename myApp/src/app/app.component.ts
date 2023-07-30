import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Merging-vs-Rebase';
  
  public gitMerge: string = '';
  public gitMergeContent: string = '';

  public ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.gitMerge = 'What is Git Rebase';
    this.gitMergeContent = 'Git rebase is a command that lets users integrate changes from one branch to another, and the logs are modified once the action is complete. Git rebase was developed to overcome merging’s shortcomings, specifically regarding logs.'
  }
}
