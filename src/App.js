import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';

import { Provider } from 'react-redux';
import store from './store';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Posts from '../src/components/posts/Posts';
import Post from '../src/components/posts/Post';
import AddPost from '../src/components/posts/AddPost';
import EditPost from '../src/components/posts/EditPost';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Header />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Posts} />
								<Route
									exact
									path="/postdetails/:id"
									component={Post}
								/>
								<Route
									exact
									path="/post/add"
									component={UserIsAuthenticated(AddPost)}
								/>
								<Route
									exact
									path="/post/edit/:id"
									component={UserIsAuthenticated(EditPost)}
								/>
								<Route
									exact
									path="/login"
									component={UserIsNotAuthenticated(Login)}
								/>
								<Route
									exact
									path="/register"
									component={UserIsAuthenticated(Register)}
								/>
							</Switch>
						</div>
						<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
