import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { AuthCuard } from './auth.guard';


const routes: Routes = [
  {path: '', component:ArticlesComponent},
  {path: 'add-article', component:AddArticleComponent, canActivate:[AuthCuard]},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'category/:id_category', component:ArticlesComponent},
  {path: 'article/:id', component:ArticlePageComponent},
  {path: 'article/edit/:id', component:EditArticleComponent, canActivate:[AuthCuard]},
  {path: 'not-found', component:NotFoundComponent},
  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
