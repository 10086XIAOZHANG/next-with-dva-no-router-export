import Link from 'next/link';
import React from 'react';
import WithDva from '../store/store';
import Layout from '../layout/BasicLayout';

class Page extends React.Component {
  static async getInitialProps(props) {
    // first time run in server side
    // other times run in client side ( client side init with default props
    // console.log('get init props');
    const {
      pathname, query, isServer, store,
    } = props;
    // dispatch effects to fetch data here
    await props.store.dispatch({ type: 'index/init' });
    return {
      // dont use store as property name, it will confilct with initial store
      pathname, query, isServer, dvaStore: store,
    };
  }

  render() {
    const { index } = this.props;
    const { name, count } = index;
    // console.log('rendered!!');
    return (
      <Layout title={`page页`}>
        <div>
          Hi,{name}!! &nbsp;
        <p>count:&nbsp; {count}</p>
          <p>
            <button onClick={() => { this.props.dispatch({ type: 'index/caculate', delta: count + 1 }); }} >
              plus
          </button>
          </p>
          <p>
            <button onClick={() => { this.props.dispatch({ type: 'index/caculate', delta: count - 2 }); }} >
              minus
          </button>
          </p>
          <p>
            <Link href="/users">
              <a>Go to /users</a>
            </Link>
          </p>
        </div>
      </Layout>
    );
  }
}

export default WithDva((state) => { return { index: state.index }; })(Page);