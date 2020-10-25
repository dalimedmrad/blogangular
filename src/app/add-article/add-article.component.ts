import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  categories =[];

  constructor(private articlesServices: ArticlesService, private router:Router) { }

  ngOnInit() {
    this.articlesServices.getCategories().subscribe(categories=>{
      this.categories = categories;
    })
    }
  log(title){
  console.log(title);
  }
  submit(form){
    //console.log(form)
    if(form.valid){
      console.log('form is valid', form.value);
      this.articlesServices.addArticles(form.value).subscribe( data => {
        console.log('Article added', data);
        this.router.navigate(['/']);

      })
    } else {
      console.log('form is not valid');
    }
  }

}
