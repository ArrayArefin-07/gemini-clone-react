import { createContext, useState } from "react";
import runChat from "../config/gemini"


export const Context = createContext();

const ContextProvider = (props) => {

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowresult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {

    setResultData("")
    setLoading(true)
    setShowresult(true)
    setRecentPrompt(input)
    const response=  await runChat(input)
    setResultData(response)
    setLoading(false)
    setInput("")
  }

  //onSent("What is react js")

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
    setInput
  }


  return(
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )

}

export default ContextProvider