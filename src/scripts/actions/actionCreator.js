import Promise from 'bluebird'
import $ from 'jquery'

export function getTime(delay) {
  return {
    types: 'GET-TIME',
    time: function() {
      $.get(url, function() {
        return time;
      })
      // return new Date().getIme9);
    }
  }
}