import React, { useState } from "react";
import { flushSync } from "react-dom";
import "./styles.css";

var musicDb = {
  Music: [
    {
      songName: "Kun Faya Kun",
      artist: "Javed Ali, Mohit Chauhan, A.R. Rahman",
      rating: "5/5",
      description:
        "The song where we finally get to hear A.R. Rahman." +
        "No Techno , only tabla and live orchestra. Sheer  magic. " +
        "Sometimes i feel A.R. Rahman is underated singer and when he sings, others just listen." +
        "Outstandig fantastic Jhakkas."
    },
    {
      songName: "Look At Me Now",
      artist: "Charlie Puth",
      rating: "3/5",
      description:
        "LOOK AT ME NOW is the first song of his self produced album EGO." +
        "He writes the song for his past bullies and girls who turned him down, telling them to look at him now."
    },
    {
      songName: "Scars To You Beautiful",
      artist: "Alessia Cara",
      rating: "4/5",
      description:
        " Scars TO Your Beautiful is a song recorded by Canadian singer and" +
        "songwriter Alessia D. Cara."
    }
  ],
  Podcast: [
    {
      songName: "The Ranveer Show",
      artist: "Ranveer Ahabadia",
      rating: "4.5/5",
      description:
        "Ranveer Allahbadia aka BeerBiceps brings you #TheRanveerShow." +
        "Every episode has been designed to bring you some kind of value add." +
        "Life is a never ending self improvement game - whether its health," +
        "career guidance, lifestyle advice or just plain old inspiration..." +
        "Each episode will charge you up in some way."
    },
    {
      songName: " On Purpose with Jay Shetty ",
      artist: "Jay Shetty",
      rating: " 5/5 ",
      description:
        "Jay Shettys purpose is to make wisdom go viral." +
        "On Purpose podcast brings fascinating conversations with some of" +
        "the most insightful people in the world straight to viewers all" +
        "over the world. Listen to new episodes on Mondays and Fridays" +
        "anywhere you get your podcasts."
    },
    {
      songName: "Trust At All Costs?",
      artist: "Jaya Row",
      rating: "4/5",
      description:
        "Should you use the truth as a strategy," +
        "knowing when to be totally honest and when not?" +
        "But the truth is not something that is open to interpretation," +
        "it is absolute and is the basis of a moral and just society."
    }
  ],
  Speeches: [
    {
      songName: "The Eagle Mentality",
      artist: " Eddie Pinero ",
      rating: "4.6/5",
      description:
        "Dont be a parrot in life, a parrot talks way too much," +
        "but cant fly high." +
        "But an eagle is silent and has the willpower to" +
        "touch the sky."
    },
    {
      songName: " F**k It ",
      artist: " David Goggins ",
      rating: "4.5/5",
      description: "The Ass-Breaking Motivaiton"
    },
    {
      songName: "10 Rules For Success",
      artist: "Elon Musk",
      rating: " 4.5/5 ",
      description:
        " Listen To Elon Musk and get motivated as he shares his life stories and events."
    }
  ]
};

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

// var favMusic = Object.keys(musicDb);
var RecommendedMusic = Object.keys(musicDb);

export default function App() {
  const [details, setDetails] = useState("Podcast");

  function genereClickHandler(category) {
    // var details = musicDb[music];
    // console.log(details);

    setDetails(category);
  }
  return (
    <div className="container">
      <div className="App">
        <div className="nav">
          <h1>
            <Emoji label="music" symbol="🎵" /> Music | The Escape Through Hell
          </h1>

          <h3>
            <span style={{ color: "indigo" }}>
              Some of the pills, I prefer to keep my growth game on the right
              track.
            </span>
          </h3>
        </div>

        <hr className="new" />

        {/* <button onClick={ genereClickHandler}> Music </button> */}
        {/* {favMusic.map(function (music) {
        return (
          <ol key={music} onClick={() => genereClickHandler(music)}>
            {music}
          </ol>
        );
      })} */}

        <h3 className="header2">
          <b> Recommended List </b>
        </h3>
        <div className="btn">
          {RecommendedMusic.map(function (category) {
            return (
              <button
                key={category}
                onClick={() => genereClickHandler(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        <ol>
          {musicDb[details].map((choice) => {
            return (
              <ol className="output-list">
                <li>{choice.songName}</li>
                <li>{choice.artist}</li>
                <li>{choice.rating}</li>
                <li>{choice.description}</li>
              </ol>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
