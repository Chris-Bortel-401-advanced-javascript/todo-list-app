import {useState} from 'react';

// The "callback" is going to come from the component
// It'll be used by the component (maybe) as it's onSubmit

const useForm = (callback) => {

  const [items, setValues] = useState({});

  const handleChange = (e) => {
    setValues( {...items, [e.target.name]: e.target.value} );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    callback && callback(items);
    // if(callback) { callback(values) }
  }

  return [handleSubmit, handleChange, items ];

}

export default useForm;
