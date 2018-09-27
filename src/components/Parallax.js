import React from 'react'

let pos = 0;

export default class Parallax extends React.Component {
  constructor(props){
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(){
    pos = window.scrollY;
    console.log('scroll' + pos);
  }

  render(){
    return(
      <section id={this.props.id} className="parallax-bg">
        {this.props.children}
      </section>
    )
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}