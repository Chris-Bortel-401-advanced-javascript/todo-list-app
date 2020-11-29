import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {
  const defaultSettings = {
    showComplete: false,
    maxNumber: 3,
    sort: 'difficulty',
  } 

  // put the items through a .sort based on the difficulty property 
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
