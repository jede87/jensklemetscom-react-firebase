import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
	state = {
		headerImageUrl:
			'https://images.unsplash.com/photo-1537737458429-52bf6612875c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=17a6c9764493173d1169bab2b31967d1&auto=format&fit=crop&w=2300&q=80'
	};

	render() {
		const { headerImageUrl } = this.state;
		return (
			<header>
				<div
					className="jumbotron jumbotron-fluid"
					style={{
						backgroundImage: `url(${headerImageUrl})`,
						backgroundRepeat: 'no-repeat',
						backgroundAttachment: 'fixed',
						backgroundPosition: 'center top'
					}}
				>
					<div className="container">
						<div className="row">
							<div className="col">
								<Link to="/">
									<h1 className="display-2 text-dark">
										jens klemets
									</h1>
								</Link>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<p className="lead">
									{'developer | lifter | brewer'}
								</p>
							</div>
							{/* <div className="col text-right">
								let there be links
							</div> */}
						</div>
					</div>
				</div>
			</header>
		);
	}
}
export default Header;
