import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

class TemplateApi {

  static testTemplate() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, {test: 'template'}));
      }, delay);
    });
  }

}

export default TemplateApi;
