import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


class Film extends Component{
    render(){
        const {film}=this.props;
        return (
            <div className='single-film'>
                <img className='main-film-image' src={film.images.image[0].src} alt={film.title}/>
                {/*<div>file ID : {film.id}</div>*/}
                <div className='single-film-title'><a href="film.permaLink">{film.title}</a></div>
                {<RelatedFilms relatedFilms={film.relatedFilms}/>}

            </div>
        )
    }
}


class RelatedFilms extends Component{
    render(){
        const {relatedFilms}=this.props;
        // console.log(relatedFilms);
        return (
          <div className='RelatedFilms'>
              {relatedFilms.relatedFilm.map((relatedFilm)=><SingleRelatedFilm key={relatedFilm.id} relatedFilm={relatedFilm}/>)}
          </div>
        );
    }
}


class SingleRelatedFilm extends Component{
    render(){
        const {relatedFilm}=this.props;
        console.log(relatedFilm);

        return (
            <div className='single-related-film'>
                <img className='related-film-image' src={relatedFilm.images.image[0].src} alt={relatedFilm.title}/>
                {/*<div>file ID : {film.id}</div>*/}
                <p className='related-film-title'>{relatedFilm.title}</p>


            </div>
        )
    }
}




class App extends Component {
    constructor(props){
        super(props);
        this.state={
        filmdata:[]
    }
    }

    componentDidMount(){
        axios.get(`http://www.snagfilms.com/apis/films.json?limit=10`).then(res=>{
            const data=res.data.films.film;
            console.log(data);
            this.setState({filmdata:data});
        });
    }
  render() {




    return (
      <div className="App">
          {this.state.filmdata.map((film)=><Film key={film.id} film={film} />)}
      </div>
    );
  }
}

export default App;
