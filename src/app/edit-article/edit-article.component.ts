import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  categories = [];
  id = null;
  article : Article = new Article();

  constructor(public articlesServices : ArticlesService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.articlesServices.getCategories().subscribe(categories=>{
      this.categories = categories;
    }) 
    this.route.paramMap.subscribe(paramMap =>{
      this.id = paramMap.get("id");
        this.articlesServices.getArticleById(this.id).subscribe(article=>{
          this.article = article;
        })
    })
  }
  submit(f){
    this.articlesServices.updateArticles(this.id,f.value).subscribe(data =>{
      this.router.navigate(['/article',this.id]);
    })
   
  }
}
