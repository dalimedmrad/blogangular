import { Component, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  1="integer";
  articles:Article[] = [];
  page=1;
  totalPages=1;
  pages=[];
  category="all";
  

  constructor(public articlesService : ArticlesService, private route: ActivatedRoute) { }

  ngOnInit() {
     
    // this.route.paramMap.subscribe(params => {
    //   console.log('id',params.get('id_category'));
    // })

    // this.route.queryParamMap.subscribe(queryParams => {
    //   if(queryParams.get('page'))
    //   { console.log('page',queryParams.get('page'));}
    // })

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined =>{
      if(combined[0].get('id_category'))
      { this.category = combined[0].get('id_category');
        console.log('get article from category',combined[0].get('id_category'));}

      if(combined[1].get('page'))
      { this.page = +combined[1].get('page');
        console.log('page',combined[1].get('page'));}

        
      this.articlesService.getArticles(this.category, this.page).subscribe(data =>{
        console.log(data);
        this.articles = data.articles;
        this.pages = Array(data.pages).fill("");
        this.totalPages = +data.pages;
      })
    })
    
  }


}


