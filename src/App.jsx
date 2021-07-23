import GlobalStyles from "./globalStyles";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { useState, useEffect } from "react";
import { db } from "./firebase";

const App = () => {
  const [charPos, setCharPos] = useState({});
  const [foundCharacters, setFoundCharacters] = useState({
    waldo: false,
    wizard: false,
    odlaw: false,
  });
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");
  const [scoreboard, setScoreboard] = useState([])

  useEffect(() => {
    db.collection("charactersPosition")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setCharPos((prevState) => {
            return { ...prevState, [doc.id]: doc.data() };
          });
        });
      });
  }, []);

  useEffect(() => {
    const query = db.collection("scoreboard").orderBy("time").limit(10);
    
    query.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        setScoreboard(prevState => {
          return [...prevState, change.doc.data()]
        })
      })
    })
  }, []);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 100);
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);
  useEffect(() => {
    setIsActive(true);
    if (
      foundCharacters.waldo &&
      foundCharacters.wizard &&
      foundCharacters.odlaw
    ) {
      setIsActive(false);
      setName(prompt("Enter your name"));
    }
  }, [foundCharacters]);

  useEffect(() => {
    if (
      foundCharacters.waldo &&
      foundCharacters.wizard &&
      foundCharacters.odlaw
    ) {
      db.collection("scoreboard").add({
        name: name,
        time: time,
      });
    }
  }, [name]);

  const validateCharClicked = (charX, charY, characterClicked) => {
    if (
      charPos[characterClicked].posX[0] < charX &&
      charPos[characterClicked].posX[1] > charX
    ) {
      if (
        charPos[characterClicked].posY[0] < charY &&
        charPos[characterClicked].posY[1] > charY
      ) {
        setFoundCharacters((prevState) => {
          return { ...prevState, [characterClicked]: true };
        });
      }
    }
  };
  return (
    <>
      <GlobalStyles />
      <Header time={time} foundCharacters={foundCharacters} />
      <Body
        foundCharacters={foundCharacters}
        scoreboard={scoreboard}
        validateCharClicked={validateCharClicked}
      />
    </>
  );
};

export default App;
