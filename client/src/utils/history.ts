// creating history obj by ourself oppose to  react router 
// and export it to use throughout entire application for easy access 
// and change which page is user looking at
// Note : always use history obj inside Reducer

import { createBrowserHistory } from 'history';

export default createBrowserHistory();
