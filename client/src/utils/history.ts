// creating history obj by ourself oppose to  react router
// and export it to use throughout entire application for easy access
// and change which page is user looking at
// Note : 1) Use Router to pass history obj
// 2) always use history obj inside Reducer

import { createBrowserHistory } from 'history';

export default createBrowserHistory();

/* Reference: 
https://reactrouter.com/web/api/Router
*/
