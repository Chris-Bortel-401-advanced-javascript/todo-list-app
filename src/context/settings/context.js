import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {
  const defaultSettings = {
    showComplete: false,
    maxNumber: 3,
    difficulty: 'ascending',
  } 

  const [settings, setSettings] = useState(defaultSettings);
  console.log(settings, 'settings line 13')
  const pageLoad = () => setSettings(settings);

  // function ascending() {
  //   console.log('ascending is working')
  // } 

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

  return (
    <SettingsContext.Provider value={ {settings, pageLoad} }>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default Settings;
