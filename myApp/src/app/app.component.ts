import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Merging-vs-Rebase';
  public gitReset: string = '';
  public gitResetContent: string = '';
  
  public gitMerge: string = '';
  public gitMergeContent: string = '';

  public ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.gitReset = 'What’s a Git Reset?';
    this.gitResetContent = 'Git reset is a powerful command that undoes changes, moving the repository back to a previous commit, and eliminating any changes made after the commit. It’s literally hitting the “reset” button, undoing local changes.'
    this.gitMerge = 'What is Git Rebase';
    this.gitMergeContent = 'Git rebase is a command that lets users integrate changes from one branch to another, and the logs are modified once the action is complete. Git rebase was developed to overcome merging’s shortcomings, specifically regarding logs.'
  }
}
