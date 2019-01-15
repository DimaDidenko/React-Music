import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Loader from 'react-loader-spinner'
import Sidebar from './Sidebar/Sidebar';
import './App.css';
import Search from '../Components/Search/Search';
import ArtistPage from '../Components/ArtistPage/ArtistPage';
import SongPage from "../Components/SongPage/SongPage";
import AlbumPage from "../Components/AlbumPage/AlbumPage";
import {fetchData, getLocal, youtubeFetch} from "../fetch";

class App extends Component {
    state = {
        artistsData: [],
        songsData: [],
        albumData: [],
        searchValue: '',
        isLoading: true,
        favouriteArtist: [],
        favouriteAlbum: [],
        favouriteSong: [],
        interestingArtist: [],
        interestingAlbum: [],
        interestingSong: [],
        yuuTubeOpen: false,
        videoID: '',
        sidebarShow: false,
    };

    componentDidMount() {
        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e900a41307805d11c3527e8aeebf5d4b&limit=48&format=json')
            .then(data => (this.setState({
                artistsData: data.artists.artist.sort((a, b) => (+b.listeners) - (+a.listeners)),
                isLoading: false,
                favouriteArtist: getLocal('favouriteArtist'),
                interestingArtist: getLocal('interestingArtist'),
            })));

        fetchData('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=e900a41307805d11c3527e8aeebf5d4b&limit=48&format=json')
            .then(data => (this.setState({
                albumData: data.albums.album,
                favouriteAlbum: getLocal('favouriteAlbum'),
                interestingAlbum: getLocal('interestingAlbum'),

            })));

        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e900a41307805d11c3527e8aeebf5d4b&limit=48&format=json')
            .then(data => (this.setState({
                songsData: data.tracks.track,
                favouriteSong: getLocal('favouriteSong'),
                interestingSong: getLocal('interestingSong'),
            })));
    }

    inputChange = (e) => {
        const value = e.target.value.toLowerCase();
        this.setState({
            [e.target.name]: value
        })
    };

    searchData = (e) => {
        e.preventDefault();
        if (this.state.searchValue === '') {
            return
        }
        fetchData(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json`)
            .then(({results}) => {
                this.setState({artistsData: results.artistmatches.artist})
            });

        fetchData(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json`)
            .then(({results}) => {
                this.setState({albumData: results.albummatches.album})
            });

        fetchData(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json`)
            .then(({results}) => {
                this.setState({songsData: results.trackmatches.track})
            });
    };

    handlerYoutube = ({target}) => {
        if (target.className === 'close') {
            this.setState({
                yuuTubeOpen: false,
            })
        } else {
            const query = target.dataset.query;
            youtubeFetch(query)
                .then(data => {
                    this.setState({
                        yuuTubeOpen: true,
                        videoID: data,
                    })
                })
        }
    };

    sidebarChange = () => {
        this.setState(prev => ({
            sidebarShow: !prev.sidebarShow
        }))
    };

    addFavourite = ({target}) => {
        const index = target.dataset.index;
        const arrForAdd = target.dataset.arrForAdd;
        const check = target.dataset.check;
        const curentItem = this.state[check][index];
        if (!this.state[arrForAdd].includes(curentItem)) {
            this.setState(prev => ({
                [arrForAdd]: [curentItem, ...prev[arrForAdd]]
            }), () => {
                localStorage.setItem(`${arrForAdd}`, JSON.stringify(this.state[arrForAdd]))
            })
        }
    };

    render() {
        const {
            albumData, songsData, artistsData, searchValue, isLoading, favouriteArtist, favouriteAlbum,
            favouriteSong, interestingArtist, interestingAlbum, interestingSong
        } = this.state;
        return (
            <div className='wrapper'>
                <div className="container">
                    <Sidebar sidebarShow={this.state.sidebarShow}/>
                    <main className="main">
                        <Search value={searchValue}
                                onChange={this.inputChange}
                                searchData={this.searchData}
                                youtube={this.handlerYoutube}
                                YuuTubeOpen={this.state.yuuTubeOpen}
                                videoId={this.state.videoID}
                                sidebarChange={this.sidebarChange}
                        />
                        {isLoading ? <div className='loader'>
                                <Loader
                                    type="ThreeDots"
                                    color="#00BFFF"
                                    height="400"
                                    width="400"
                                />
                            </div> :
                            <div>
                                <Switch>
                                    <Route exact path='/' render={() => <ArtistPage
                                        artistsData={artistsData}
                                        addFavourite={this.addFavourite}
                                        handlerYoutube={this.handlerYoutube}/>}/>
                                    <Route path='/album' render={() => <AlbumPage
                                        albumData={albumData}
                                        addFavourite={this.addFavourite}
                                        handlerYoutube={this.handlerYoutube}/>}/>
                                    <Route path='/songs' render={() => <SongPage
                                        songsData={songsData}
                                        addFavourite={this.addFavourite}
                                        handlerYoutube={this.handlerYoutube}/>}/>

                                    <Route exact path='/FavouritesArtist' render={() => <ArtistPage
                                        artistsData={favouriteArtist}/>}/>
                                    <Route path='/FavouritesAlbum' render={() => <AlbumPage
                                        albumData={favouriteAlbum}/>}/>
                                    <Route path='/FavouritesSong' render={() => <SongPage
                                        songsData={favouriteSong}/>}/>

                                    <Route exact path='/InterestingArtist' render={() => <ArtistPage
                                        artistsData={interestingArtist}/>}/>
                                    <Route path='/InterestingAlbum' render={() => <AlbumPage
                                        albumData={interestingAlbum}/>}/>
                                    <Route path='/InterestingSong' render={() => <SongPage
                                        songsData={interestingSong}/>}/>
                                </Switch>
                            </div>
                        }
                    </main>
                </div>
            </div>
        );
    }
}

export default App;





