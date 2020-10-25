import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { category } from '../models/article.model';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   user: User = new User();
  categories: category[] = [];
  constructor(private articlesServices: ArticlesService, public auth:AuthService) { }

  ngOnInit() {
    this.articlesServices.getCategories().subscribe(categories => {
     this.categories = categories;
    })
    this.auth.authenticate();
    this.auth.connectedUser$.subscribe(user=>{
      this.user = user;
    })
  }

  logout(){
     this.auth.logout();
  }


}
