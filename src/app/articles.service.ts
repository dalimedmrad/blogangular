import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articles, category, Article } from './models/article.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public index =0;
  apiPath= "https://nodejsaycourse.herokuapp.com/api";

 
  constructor(private http: HttpClient, private auth:AuthService) { }

  getArticles(category='all',page=1){
    return this.http.get<Articles>(this.apiPath + "/categories/" + category + "/articles?page=" + page);
  }
  getArticleById(id){
    return this.http.get<Article>(this.apiPath + "/articles/" + id);}
    
  addArticles(article){
    //let headers = new HttpHeaders().set('x-auth-token',localStorage.getItem('token'));
    return this.http.post(this.apiPath + "/articles", article);
  }
  deleteArticle(id){ 
    if(this.auth.isLoggedIn()){ return this.http.delete(this.apiPath + "/articles/"+id);}
  }
  updateArticles(id,article){
  return this.http.put(this.apiPath + "/articles/" + id, article);

  }
  getCategories (){
   return this.http.get<[category]>(this.apiPath + "/categories");
  }

  
}
