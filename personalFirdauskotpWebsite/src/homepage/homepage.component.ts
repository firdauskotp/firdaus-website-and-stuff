import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  theme = true
  


  constructor(private router: Router, public translate: TranslateService){
    translate.addLangs(['en','my','cn']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|my|cn/) ? browserLang:'en');
  }
  ngOnInit(): void {
    
  }
  
  storiesNav(): void{
    this.router.navigate(['/stories'])
  }

  homeNav(): void{
    this.router.navigate(['/home'])
  }

}
