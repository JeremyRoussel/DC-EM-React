export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return {auth: {authenticated: localStorage.getItem('token')}};
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return {auth: {authenticated: localStorage.getItem('token')}};
    }
  }; 

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
  };