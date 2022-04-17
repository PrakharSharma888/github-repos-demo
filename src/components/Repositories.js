import { Component } from 'react';


export default class Repositories extends Component {
  
  constructor(){
    super()
    this.state = {
        repo : [],
        page : 1
    }
}

  async componentDidMount(){
      let url = "https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc&page=1&per_page=4";

      const data = await fetch(url);
      const parsedData = await data.json();
      
      this.setState({
        repo : parsedData.items,
        page : 1
    })
    console.log(this.state.repo)
      }

    nextPage = async ()=>{
      let url = `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc&page=${this.state.page + 1}&per_page=4`;
      
      let data = await fetch(url)
      let parsedData = await data.json()
      
      this.setState({
          page : this.state.page + 1,
          repo : parsedData.items,
      })
    }

      prevPage = async ()=>{
        let url = `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc&page=${this.state.page - 1}&per_page=4`;
        
        let data = await fetch(url)
        let parsedData = await data.json()
        
        this.setState({
            page : this.state.page - 1,
            repo : parsedData.items,
        })   
  }
  render() {
    return (

      <div className="card text-center m-5">
      <div className="card-header">
      Prakhar Sharma
      </div>
      <div className="card-body">
      <h5 className="card-title">My Github Repositories</h5>
      <p className="card-text">Click on anyone to check out that repo!</p>
      <a href="http://www.github.com" className="btn btn-primary">Github.com</a>
      </div>
      <div className="card-footer text-muted container-box d-flex justify-content-center">
      {this.state.repo.map((element)=>{
                    return <>
                    <div className="container d-flex justify-content-center">
                      <p className='name d-flex justify-content-center'>Repo Name : {element.name}</p>
                      <div className='same d-flex justify-content-around'>
                        <p className='owner'><i class="fa fa-user" aria-hidden="true"></i> <br/>{element.owner.login}</p>
                        <p className='stars'><i class="fa fa-star-o" aria-hidden="true"></i> <br/> {element.stargazers_count}</p>
                      </div>
                      <p className='forks'>Number of forks: {element.forks_count}</p>
                      <p className='lang'>Language: {element.language}</p>
                      <p className='disc'>Description :{element.description.slice(0,100)}</p>
                      <a href={element.url} className="btn btn-primary">Go to repo !</a>
                      </div>
                      
                      </>
                })}

      </div>
      <div className="buttons d-flex justify-content-center">
      <button disabled={this.state.page<=1} onClick={this.prevPage} className="btn btn-primary next">Previous</button>
      <button onClick={this.nextPage} className="btn btn-primary prev">Next</button>
      </div>
      </div>
);
}
}