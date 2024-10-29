import { createContext, useState } from "react";
import run from "../config/gemini";

const Context = createContext();

const ContextProvider = (props) => {

  // state variables for taking input from the user and producing the output

  // used to take input
  const [input,setInput] = useState("");
  // input data is saved in recent prompt
  const [recentPrompt,setRecentPrompt] = useState("");
  // used to store input history
  const [prevPrompts,setPrevPrompts] = useState([]);
  // if this is true, it will hide the unwanted boxes
  const [showResult,setShowResult] = useState(false);
  // if true it displays loading animation
  const [loading,setLoading] = useState(false);
  // used to display result on the webpage
  const [resultData,setResultData] = useState("");

  const delayPara = (index,nextWord) => {
    setTimeout(function() {
      setResultData(prev=>prev+nextWord);
    },75*index)
  }

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  }

  const onSent = async (prompt) => {

    setResultData("")
    setLoading(true)
    setShowResult(true)

    let response;
    if (prompt !== undefined) 
    {
      response = await run(prompt);
      setRecentPrompt(prompt);
    }
    else
    {
      setPrevPrompts(prev => [...prev,input]);
      setRecentPrompt(input);
      response = await run(input);
    }

    let responseArray = response.split("**");

    let newResponse = "";
    for(let i = 0; i < responseArray.length; i++) 
    {
      if (i===0 || i%2 !== 1) 
      {
        newResponse += responseArray[i];
      } 
      else 
      {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("<br><br>");

    let newResponseArray = newResponse2.split(" ");
    for(let i = 0; i < newResponseArray.length; i++)
    {
      const nextWord = newResponseArray[i];
      delayPara(i,nextWord + " ");
    }

    // setResultData(newResponseArray)
    setLoading(false)
    setInput("")
  };

  // onSent("What is React Js");

  const contextValue = {
      prevPrompts,
      setPrevPrompts,
      onSent,
      setRecentPrompt,
      recentPrompt,
      showResult,
      loading,
      resultData,
      input,
      setInput,
      newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export { Context };
export default ContextProvider;
