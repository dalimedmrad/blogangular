import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './summary.pipe';
import { ArticleComponent } from './article/article.component';
import { ModalComponent } from './modal/modal.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticlePageComponent } from './article-page/article-page.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { AppInterceptor } from './app-interceptor';
import { AuthCuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    HeaderComponent,
    FooterComponent,
    SummaryPipe,
    ArticleComponent,
    ModalComponent,
    AddArticleComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    ArticlePageComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
    },
    AuthCuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
