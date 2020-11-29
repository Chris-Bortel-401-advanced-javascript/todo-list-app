import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {
  const defaultSettings = {
    showComplete: false,
    maxNumber: 3,
    sort: 'difficulty',
  } 

  // put the items through a .sort based on the difficulty property 
  // we will sort on every render/ everytime that we add a task

  // TODO: figure out how to sort through   console.log(list[1].difficulty)

  // Step 1: On load sort through existing array 
  // Step 2: On Submit sort modified state ==> this is what useEffect is adding


  // A solution
// let sortArray = data.results
// sortArray.sort()

//B solution
  //sort(data.results[i].difficulty)
  
  // will want to add 
  const [settings, setSettings] = useState(defaultSettings);

  const pageLoad = () => setSettings(settings);

  return (
    <SettingsContext.Provider value={ {settings, pageLoad} }>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default Settings;
