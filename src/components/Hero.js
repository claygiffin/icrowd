import React from 'react'

let pos = 0;

class Hero extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      pos: 0,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(){
    pos = window.scrollY / 3;
    this.setState({
      pos: pos,
    });
    console.log(this.state.pos);
  }

  render(){
    return(
      <section id="hero">
        {this.props.children}
        <video ref="vidRef" id="hero-video" loop autoPlay playsInline async muted style={{top: `calc(50% + ${this.state.pos}px`}}>
          {this.props.videoWebM ? <source src={this.props.videoWebM} type="video/webm" /> : null }
          {this.props.videoOgg ? <source src={this.props.videoOgg} type="video/ogg"/> : null }
          {this.props.videoMp4 ? <source src={this.props.videoMp4} type="video/mp4" /> : null }
        </video>
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

export default Hero

