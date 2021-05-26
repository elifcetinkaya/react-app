// İlk olarak constructor --> state initialization
// render methodu ilk defa çalıştı
// onclick event'i çalıştı.
// setState state nesnesini güncelledi. Triggered render
// render methodu güncel JSX'i sayfada gösterdi.

import React from "react";

class Collapse extends React.Component {
  constructor() {
    super(); //React methodu içindeki constructor methodunu almayı sağlar.

    this.state = {
      showContent: false
    }

    //this.showMore = this.showMore.bind(this)

  }

  showMore = () =>{
    this.setState({showContent: !this.state.showContent})
  }

  /*showMore(){
    this.setState({showContent: true})
    //console.log(this)
    
  }*/


  render() {
    console.log(this)
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          Link with href
        </button>
        {this.state.showContent ? (
          <div className="collapse show">
            {this.props.children}
            {this.state.showContent}
          </div>
        ) : null}
      </div>
    );
  }
}
export default Collapse;
