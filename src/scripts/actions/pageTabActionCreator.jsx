import Promise from 'bluebird'
import * as Server from '../data/server';

export function showWarehouse() {
  return {
    type: 'SHOW-WAREHOUSE'
  }
}

export function showMarket() {
  return {
    type: 'SHOW-MARKET'
  }
}

export function showNews() {
  return {
    type: 'SHOW-NEWS'
  }
}