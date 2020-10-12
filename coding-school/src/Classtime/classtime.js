/* eslint-disable */
import "./classtime.css";
import React from "react";
import { app } from "../index";
import Spotify from "../ApiHelpers/Spotify";
import Accordion from "../CustomComponents/Accordion";
import { AppBar, IconButton, Toolbar, Button } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

// Classtime 8/12
class ActualHumanBeing extends React.Component {
    happy = {
        name: "happy",
        text: ": )",
    };
    sad = {
        name: "sad",
        text: ": (",
    };
    angry = {
        name: "angry",
        text: ">: (",
    };
    ehhh = {
        name: "ehhh",
        text: ": /",
    };

    moods = [this.happy, this.sad, this.angry, this.ehhh];

    state = this.happy;

    changeMood = (mood) => {
        this.setState(mood);
    };

    render() {
        return (
            <>
                {this.moods.map((mood) => (
                    <div
                        className={`human ${mood.name}`}
                        onClick={() => this.changeMood(mood)}
                    >
                        {mood.text}
                    </div>
                ))}
                <h1> My mood is: {this.state.name}</h1>
            </>
        );
    }
}

app.show(
    <>
        <ActualHumanBeing></ActualHumanBeing>
    </>
);

// This is a definition
class CarList extends React.Component {
    list = [
        {
            make: "Volvo",
            model: "740",
            color: "Yellow",
        },
        {
            make: "Airplane",
            model: "909",
            color: "Blue",
        },
        {
            make: "Mustang",
            model: "GT",
            color: "White",
        },
    ];

    intoCarDetailView = (car) => {
        return (
            <h1>
                {car.make} {car.model} {car.color}
            </h1>
        );
    };

    // After the return is what shows when this component is rendered
    render = () => {
        return <>{this.list.map(this.intoCarDetailView)}</>;
    };
}

app.show(
    <>
        <CarList></CarList>
    </>
);

// Example Spotify Data
const Example_Spotify_Data = {
    tracks: {
        items: [
            {
                name: "Song 1",
                preview_url: "Link to preview mp3 file",
                external_urls: {
                    spotify: "Link to spotify",
                },
                album: {
                    images: [{ url: "Link to image" }],
                },
            },
            {
                name: "Song 2",
                preview_url: "Link to preview mp3 file",
                external_urls: {
                    spotify: "Link to spotify",
                },
                album: {
                    images: [{ url: "Link to image" }],
                },
            },
        ],
    },
    albums: {
        items: [
            {
                name: "Imminent Euphoria",
                total_tracks: 5,
                images: [{ url: "Link to image" }],
                external_urls: {
                    spotify: "Link to spotify",
                },
            },
            {
                name: "99.9%",
                total_tracks: 16,
                images: [{ url: "Link to image" }],
                external_urls: {
                    spotify: "Link to spotify",
                },
            },
        ],
    },
    artists: {
        items: [
            {
                name: "Mia",
                followers: {
                    total: 30,
                },
                external_urls: {
                    spotify: "Link to Spotify",
                },
                images: [{ url: "Link to image" }],
            },
            {
                name: "Blue October",
                followers: {
                    total: 30,
                },
                external_urls: {
                    spotify: "Link to Spotify",
                },
                images: [{ url: "Link to image" }, { url: "Link to image" }],
            },
        ],
    },
};

class SpotifyArtist extends React.Component {
    artist = this.props.artist;

    render() {
        if (!this.artist.images[0]) {
            this.artist.images[0] = {};
        }
        return (
            <a
                className="artist"
                target="_blank"
                href={this.artist.external_urls.spotify}
            >
                <h2>{this.artist.name}</h2>
                <img
                    width="150px"
                    height="150px"
                    src={this.artist.images[0].url}
                ></img>
                <p>Followers: {this.artist.followers.total}</p>
            </a>
        );
    }
}

class SpotifyTrack extends React.Component {
    render() {
        return (
            <div className="track">
                <img
                    width="100px"
                    height="100px"
                    src={this.props.track.album.images[0].url}
                ></img>
                <div className="track-player">
                    <h2>{this.props.track.name}</h2>
                    <audio controls src={this.props.track.preview_url}></audio>
                </div>
            </div>
        );
    }
}

class SpotifySearch extends React.Component {
    state = {
        songList: Example_Spotify_Data.tracks.items,
        artistList: Example_Spotify_Data.artists.items,
    };

    intoTrackView = (trackData, index) => {
        return (
            <SpotifyTrack
                key={`track${index}`}
                track={trackData}
            ></SpotifyTrack>
        );
    };

    intoArtistView = (artistData) => {
        return <SpotifyArtist artist={artistData}></SpotifyArtist>;
    };

    resultsFound = (results) => {
        this.setState({
            songList: results.tracks.items,
            artistList: results.artists.items,
        });
    };

    render = () => {
        return (
            <>
                <Spotify.SearchBar onFound={this.resultsFound} />

                <Accordion title="Songs">
                    {this.state.songList.map(this.intoTrackView)}
                </Accordion>

                <Accordion title="Artists">
                    <div className="artist-grid">
                        {this.state.artistList.map(this.intoArtistView)}
                    </div>
                </Accordion>
            </>
        );
    };
}

app.show(
    <>
        <SpotifySearch></SpotifySearch>
    </>
);

class MyButton extends React.Component {
    state = { buttonText: "var", otherText: "nu nu new" };

    render() {
        return (
            <Button
                color="secondary"
                variant="contained"
                onClick={() =>
                    this.setState({
                        buttonText: "new text",
                        otherText: "nu nu neww",
                    })
                }
            >
                {this.state.buttonText}
                <h1>{this.state.otherText}</h1>
            </Button>
        );
    }
}

app.show(<MyButton />);

app.show(
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <h6>News</h6>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
);
