import React, { Component } from 'react';
import './App.css';
import Preview from './Preview';

class App extends Component {
	state = {
		flag: false,
		activeArticle: false
	};
	componentDidMount() {
		this.fetchFeed();
	}

	fetchFeed = () => {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss', false);
		request.send();
		var xml = request.responseXML;
		this.setState({ data: xml }, () => {
			var items = this.state.data.getElementsByTagName('item');
			const articles = {};
			for (var i = 0; i < items.length; i++) {
				let article = {};
				article.id = i + 1;
				article.title = items[i].getElementsByTagName('title')[0].innerHTML;
				article.url = items[i].getElementsByTagName('link')[0].innerHTML;
				article.pubDate = items[i].getElementsByTagName('pubDate')[0].innerHTML;
				article.author = items[i].getElementsByTagName('author')[0]
					? items[i].getElementsByTagName('author')[0].innerHTML
					: 'Anonymous';
				article.description = items[i].getElementsByTagName('description')[0].innerHTML;
				article.img = items[i].getElementsByTagName('media:content')[0]
					? items[i].getElementsByTagName('media:content')[0].getAttribute('url')
					: 'none';
				article.category = items[i].getElementsByTagName('category')[0].outerHTML;
				articles[`article ${i + 1}`] = article;
			}
			this.setState({ articles: articles }, () => {
				this.setState({ flag: true });
			});
		});
	};

	fetchArticle = (url, title) => {
		let that = this;
		fetch(`https://mercury.postlight.com/parser?url=${url}`, {
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': 'YBgHyID4pkPx1DPICY0jxf5454ALrZqeKG1m8Elf'
			}
		}).then((response) => {
			return response.json().then((myJson) => {
				that.setState({ currentArticle: myJson.content }, () => {
					that.setState({ activeArticle: true }, () => {
						// eslint-disable-next-line no-lone-blocks
						{
							this.state.activeArticle
								? (document.getElementById('article').innerHTML = that.state.currentArticle) &&
									(document.getElementById('article').style.display = 'block') &&
									document
										.getElementById('headline')
										.prepend(document.createElement('p').appendChild(document.createTextNode(title)))
								: (document.getElementById('article').innerHTML = '');
							window.scrollTo(0, 0);
							document.getElementById('main').style.display = 'none';
						}
					});
				});
			});
		});
	};

	closeArticle = () => {
		this.setState({ activeArticle: false });
		document.getElementById('article').innerHTML = '';
		document.getElementById('main').style.display = 'block';
		document.getElementById('article').style.display = 'none';
		document.getElementById('headline').innerHTML = '';
		this.setState({ currentArticle: null });
		window.scrollTo(0, 0);
	};

	render() {
		return (
			<div className="App">
				<div className="Container">
					{this.state.activeArticle ? (
						<div id="stickyUpperMenu">
							<button
								className="stickyButton"
								onClick={() => {
									this.closeArticle();
								}}
								// style={{ cursor: 'pointer', float: 'right' }}
							>
								<label className="backArrow">←</label> Back to articles
							</button>
						</div>
					) : (
						false
					)}
					<h1 id="headline"> </h1>
					<div id="article" />
					<div id="main">
						{this.state.flag ? (
							Object.entries(this.state.articles).map(([ key, value ]) => (
								<Preview
									key={value.id}
									link={value.url}
									image={value.img}
									date={value.pubDate}
									title={value.title}
									description={value.description}
									author={value.author}
									onclick={() => {
										this.fetchArticle(value.url, value.title);
									}}
								/>
							))
						) : (
							'Loading articles...'
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
