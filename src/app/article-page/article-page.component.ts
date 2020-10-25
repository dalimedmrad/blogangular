import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article: Article = new Article();
  constructor(public articlesService : ArticlesService,
    private route: ActivatedRoute, 
    private router:Router,
    public auth:AuthService) { }

  ngOnInit(){
    this.route.paramMap.subscribe(paramMap =>{
      let id = paramMap.get('id');
      if(id){
        this.articlesService.getArticleById(id).subscribe(article=>{
          this.article = article;
        },error =>{
          if(error.status == 404){
            this.router.navigate(['not-found']);
          }else{console.log('unexpected error');}
        })
      }
    })
  }
  delete(id){
    if(confirm("Are you sure to delete ? ")){
    this.articlesService.deleteArticle(id).subscribe(data=>{
      this.router.navigate(['/']);
    })

  }}
}
