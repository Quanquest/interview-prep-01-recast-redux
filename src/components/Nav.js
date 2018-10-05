class Nav extends React.Component {
  constructor (props) {
    super(props);
  }

  handleGoClick () {

  }

  render () {
    return (
      <form id="SearchBar">
        <button 
          onClick={() => this.props.changeBack()}
          id="back"
        >Back</button>
        <button 
          onClick={() => this.props.changeForward()}
          id="forward"
        >Forward</button>
        <input type="text" id="bar" placeholder="website"/>
        <button 
          onClick={() => {}}
          id="go"
        >Go</button>
      </form>
    )
  }
}
