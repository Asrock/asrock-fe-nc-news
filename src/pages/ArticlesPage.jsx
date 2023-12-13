import { useState } from "react";
import apiRequest from "../../utils/api-utils"
import { useUpdateEffect } from "../../utils/react-utils"
import ArticleCard from "../components/ArticleCard";

export default function ArticlesPage() {
	const [articles, setArticles] = useState([]);
	const [pageManager, setPageManager] = useState({ current: 1 });

	useUpdateEffect(() => {
		apiRequest("get", `articles?p=${pageManager.current}`)
			.then(({ data }) => {
				setPageManager({ ...pageManager, total: Math.ceil(data.total_count / 10) });
				setArticles(data.articles);
			});
	}, [pageManager.current]);

	const pageHandler = (num) => () => setPageManager(p => ({ ...p, current: p.current + num }));

	return (
		<main>
			<div className="inline">
				{pageManager.current > 1 && <button onClick={pageHandler(-1)}>Previous page</button>}
				<p>Page {pageManager.current}/{pageManager.total}</p>
				{pageManager.current < pageManager.total && <button onClick={pageHandler(1)}>Next page</button>}
			</div>
			<h2>Articles</h2>
			<div className="articles-list">
				{articles.map((article) => <ArticleCard key={article.article_id} article={article} />)}
			</div>

		</main>
	);
}