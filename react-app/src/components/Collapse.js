// İlk olarak constructor --> state initialization
// render methodu ilk defa çalıştı
// onclick event'i çalıştı.
// setState state nesnesini güncelledi. Triggered render
// render methodu güncel JSX'i sayfada gösterdi.

import React from "react";

class Collapse extends React.Component {

  state = {showContent: false}

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  // componentDidMount(){
  //   console.log('Component oluşturuldu.')
  // }

  // componentDidUpdate(){
  //   console.log('Component güncellendi.')
  // }

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {/* {this.props.children.props.cardTitle} */}
          {React.Children.map(this.props.children, children => children.props.cardTitle)}
        </button>
        {this.state.showContent ? (
          <div className="collapse show">
            {/* {this.props.children} */}
            {React.Children.map(this.props.children, children => children)}
            {this.state.showContent}
          </div>
        ) : null}
      </div>
    );
  }
}
export default Collapse;
