import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    state = {
        cars: [],
        booktitle : "",
        booklistarray:[]
    }

    componentDidMount(){
        // this.getCars();
    }

    handleTyping = (event) =>{
        
        console.log("Typing happening!!",event.target.value);
        this.setState({booktitle:event.target.value})
    }
    getBooks = () => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+this.state.booktitle)
        .then((bookData) => {
            console.log(bookData.data.items);
            this.setState({booklistarray:bookData.data.items})
           
        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
            <h1>This is my homepage!</h1>
    <input onChange={this.handleTyping}></input>

    <button onClick={this.getBooks}>Search</button>


    {this.state.booklistarray.map((singleBook)=>{
        return (<h1>{singleBook.volumeInfo.title}</h1>)
    })}
            </div>
        );
    }
}

export default Home;