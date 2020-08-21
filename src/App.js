import React from 'react';
import Header from './component/header';
import Headline from './component/headline'
import './app.scss';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true,
}]

const initialState = {
  hideBtn: false
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = {
      ...initialState
    }
  }

  exampleMethod() {
    this.setState(prevState => ({
      hideBtn: !prevState.hideBtn
    }))
  }

  exampleMethod2(number) {
    return number + 1;
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod();
  }

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" tempArr={tempArr} desc="Click the button to render posts"/>
          {!this.state.hideBtn && 
            <SharedButton {...configButton} />}
          {posts.length > 0 && 
            <div>
              {posts.map((post, index) => <ListItem key={index} title={post.title} desc={post.body}/>)}
            </div>}
        </section>
        </div>
    )
  }
}

const mapState = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapState, { fetchPosts })(App);
