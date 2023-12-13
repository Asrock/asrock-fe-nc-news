import { useState } from "react";
import { useUpdateEffect } from "../../utils/react-utils"
import apiRequest from "../../utils/api-utils"
import ArticleCard from "../components/ArticleCard";
import ApiManager from "../components/ApiManager";

export default function ArticlesPage() {
	const [apiStatus, setApiStatus] = useState({ status: "loading" });
	const [articles, setArticles] = useState([]);
	const [pageManager, setPageManager] = useState({ current: 1 });

	const pageHandler = (num) => () => setPageManager(p => ({ ...p, current: p.current + num }));

	useUpdateEffect(() => {
		apiRequest("get", `articles?p=${pageManager.current}`)
			.then(({ data }) => {
				setPageManager({ ...pageManager, total: Math.ceil(data.total_count / 10) });
				setArticles(data.articles);
				setApiStatus({ status: "completed" });
			});
	}, [pageManager.current]);

	return ApiManager(apiStatus,
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