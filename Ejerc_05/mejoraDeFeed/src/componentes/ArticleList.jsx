import { Articulos } from "./Articulos";

export function ArticleList({allArticles, searchTerm}) {
    return (
        <div className="d-flex flex-column gap-3">
            {allArticles.map((article) => {
                if (article.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return (
                        <Articulos key={article.id} article={article}/>
                    );
                }
            })}
        </div>
    );
}