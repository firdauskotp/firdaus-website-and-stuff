import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  theme = true

  constructor(private router: Router, public translate: TranslateService){
    translate.addLangs(['en','my','cn']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|my|cn/) ? browserLang:'en');
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
