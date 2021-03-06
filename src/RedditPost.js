import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Time from './time';
import Thumbnail from './Thumbnail';
import Voting from './Voting';

export default class RedditPost extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    onUpvote: PropTypes.func.isRequired,
    onDownvote: PropTypes.func.isRequired
  }
 
  render() {
    const { post, onDownvote, onUpvote } = this.props;

    return (
      <div className="reddit-post">
        <Voting post={post}
          onUpvote={onUpvote}
          onDownvote={onDownvote} />
        <Thumbnail post={post}/>
        <div className="content">
          <h3 className="title">
            <a href={post.url}>{post.title}</a>
          </h3>
          <div className="submitted">
            Submit <Time time={post.created} isUnixTime={true}/>
          </div>
          <a className="comments" href={`https://www.reddit.com${post.permalink}`}>
            {post.num_comments} comments
          </a>
          <span className="action">share</span>
          <span className="action">save</span>
          <span className="action">hide</span>
        </div>
      </div>
    )
  }
}
