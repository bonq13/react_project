import React, { useState, useEffect, use } from 'react';
import {
	Wrapper,
	NewsSectionHeader,
	ArticleWrapper,
	TitleWrapper,
	ContentWrapper,
} from './NewsSection.styles';
import { Button } from '../../atoms/Button/Button.styles';
import axios from 'axios';

const API_TOKEN = '5ba0561d2a7d4e949dc311e8f7a017';

const NewsSection = () => {
	

	const [articles, setArticles] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		axios
			.post(
				'https://graphql.datocms.com/',
				{
					query: `{
                       allArticles {
                            id
                            title
                            category
                            content
                            image{
                                url
                            }
                     }
                }`,
				},
				{
					headers: {
						authorization: `Bearer ${API_TOKEN}`,
					},
				}
			)
			.then(({ data: { data } }) => {
				setArticles(data.allArticles);
			})
			.catch(() => setError(`Sorry, we couldn't load articles for you`));
	},[]);

	return (
		<Wrapper>
			<NewsSectionHeader>University news feed</NewsSectionHeader>
			{articles.length > 0 ? (
				articles.map((item) => (
					<ArticleWrapper key={item.id}>
						<TitleWrapper>
							<h3>{item.title}</h3>
							<p>{item.category}</p>
						</TitleWrapper>
						<ContentWrapper>
							<p>{item.content}</p>
							{item.image != null ? (
								<img src={item.image.url} alt='article image ' />
							) : null}
						</ContentWrapper>
						<Button $isBig>Read more</Button>
					</ArticleWrapper>
				))
			) : (
				<NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
			)}
		</Wrapper>
	);
};

export default NewsSection;
