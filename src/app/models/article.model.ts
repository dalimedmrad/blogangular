export class Articles {
    articles: Article[];
    count: string;
    page: string;
    limit: string;
    pages:string;
}


export class Article {
    _id: string;
    title: string;
    content:string;
    author:string;
    category:category = new category();
    isPublished:boolean;
    date:string;
}
export class category {
    _id: string;
    name: string;
    description: string;
    
}