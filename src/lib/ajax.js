/* eslint no-unused-vars: 0 */

import axios from 'axios';

class BaseAjax {
  constructor(){
    this._isLoading = false;
  }

  set isLoading(bool){
    this._isLoading = bool;
  }
}

export default class CommonAjax extends BaseAjax {
  constructor(){
    super();
  }

 get(url, config){
    // APIのキャッシュ対策
    const requestUrl = url  + (url.indexOf('?') === -1 ? '?' : '&') + '_=' + Date.now();
    var res = axios.get(requestUrl, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response
      })
    return res

  }

  post(){

  }

  put(){

  }

  delete(){

  }
}
