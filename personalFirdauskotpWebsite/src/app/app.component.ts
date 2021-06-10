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

  test=1;
  myVar ="1";

  nav1(): void{
    this.test = 1
    localStorage.setItem("token", "1");
  }

  nav2(): void{
    this.test = 2
    localStorage.setItem("token", "2");

  }

  nav3(): void{
    this.test = 3
    localStorage.setItem("token", "3");
  }

  nav4(): void{
    this.test = 4
    localStorage.setItem("token", "4");
  }

  nav5(): void{
    this.test = 5
    localStorage.setItem("token", "5");
  }

  nav6(): void{
    this.test = 6
    localStorage.setItem("token", "6");
  }

  nav7(): void{
    this.test = 7
    localStorage.setItem("token", "7");
  }

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
    this.router.navigate([''])
  }
}
