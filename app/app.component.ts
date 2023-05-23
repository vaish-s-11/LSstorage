import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title) {
    throw new Error('Method not implemented.');
  }
  private storageKey = 'UZUMAKI';
  private defaultColor = 'aqua';
  userBackgroundColor = null;
  userName: string = null;
  newUserName: string = '';
  

  ngOnInit(): void {
    this.loadBackgroundPreferences();
    this.loadUserName();
  }
  private loadBackgroundPreferences(): void {
    this.userBackgroundColor = this.getBackgroundColor();
    window.document.body.style.backgroundColor = this.getBackgroundColor();
  }
  private getBackgroundColor(): string {
    return localStorage.getItem(this.storageKey) || this.defaultColor;
  }
  removePreferences(): void {
    localStorage.removeItem(this.storageKey);
    this.loadBackgroundPreferences();
  }
  saveBackgroundColor(color: string): void {
    localStorage.setItem(this.storageKey, color);
    this.loadBackgroundPreferences();
  }

  // string
  private loadUserName(): void {
    this.userName = localStorage.getItem(this.storageKey);
  } 
  saveUserName(): void {
    localStorage.setItem(this.storageKey, this.newUserName);
    this.loadUserName();
  }

  displayText(value: any): void {
    console.log('Input Text:', value);
  }

dataSave(){
  sessionStorage.setItem('SASUKE', 'UCHIHA');
}
get(){
  return sessionStorage.getItem('SASUKE');
}
}
