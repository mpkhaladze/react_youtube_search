<<<<<<< HEAD

import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCyHUiuHq1mPqkoGWcaYsaX6Iy79FOrr_c'


class App extends Component {
	constructor (props) {
		super(props)

		this.state = { 
			videos: [],
			selectedVideo: null
		 }
		this.videoSearch('kanfeti')
	}

	videoSearch(term){
		YTSearch ({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			})
		})
	}

	render (){

		const videoSearch = _.debounce( (term) => { this.videoSearch (term) }, 500 )

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
					/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
>>>>>>> 7d165bf992a6e2807ca28140b8e3ea8a81bf381e
