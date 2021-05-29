import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome!';
  theme = true
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private router: Router, public translate: TranslateService){
    translate.addLangs(['en','my','cn']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|my|cn/) ? browserLang:'en');
    
    
  }

  getLangVal(event) {
    console.log(event);
    if (event === 1 || '') {
      this.translate.use('en');
    } else if (event === 2){
      this.translate.use('my');
    } else if (event === 3){
      this.translate.use('cn');
    }
  }
  
  storiesNav(): void{
    this.router.navigate(['/stories'])
  }

  homeNav(): void{
    this.router.navigate([''])
  }

  ngOnInit(){
    
  }
}
