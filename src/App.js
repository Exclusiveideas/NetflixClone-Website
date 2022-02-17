import './App.css';
import Row from './Row';
import request from './request'
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  
  return (
    <div className="app">
      <Navbar />
      <Banner/>
      <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={request.fetchNetflixOriginals} />
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending}  />
      <Row title="TOP RATED" fetchUrl={request.fetchTopRated}  />
      <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies}  />
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies}  />
      <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies}  />
      <Row title="ROMANCE" fetchUrl={request.fetchRomanceMovies}  />
      <Row title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries}  />
      
    </div>
  );
}

export default App;
