import moment from 'moment';
import store from 'store';
import CryptoJS from 'crypto-js';

/**
 * @description Load javascript dynamically
 * @param {string} url
 * @param {function} callback 回调
 * @return false or undefined
 */
export const loadScript = (url, callback) => {
  // check if script is loaded
  const checkIsLoadScript = (src) => {
    let scriptObjs = document.getElementsByTagName('script');
    for (let sObj of scriptObjs) {
      if (sObj.src == src) {
        return true;
      }
    }
    return false;
  };

  if (checkIsLoadScript(url)) {
    callback();
    return false;
  }

  let scriptNode = document.createElement('script');
  scriptNode.setAttribute('type', 'text/javascript');
  scriptNode.setAttribute('src', url);
  document.body.appendChild(scriptNode);
  if (scriptNode.readyState) {
    //IE 判断
    scriptNode.onreadystatechange = () => {
      if (scriptNode.readyState == 'complete' || scriptNode.readyState == 'loaded') {
        callback();
      }
    };
  } else {
    scriptNode.onload = () => {
      callback();
    };
  }
};

export const isLogin = () => {
  return !store.getState().userInfo || !store.getState().userInfo.userId ? false : true;
};

/**
 * Debounce.
 * @param {function} fn
 * @param {number} delay
 * @returns undefined
 */
export const debounce = function (fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
};

/**
 * Throttle function to reduce traffic.
 * @param {function} fn
 * @param {number} delay
 * @returns undefined
 */
export const throttle = function (fn, delay) {
  let valid = true;
  return function () {
    if (!valid) {
      // waiting
      return false;
    }
    // execute function and set status to false
    valid = false;
    setTimeout(() => {
      fn();
      valid = true;
    }, delay);
  };
};

/**
 * crypto-js AES 加解密
 * 加密（需要先加载lib/aes/aes.min.js文件）
 */
export const encrypt = (word) => {
  var key = CryptoJS.enc.Utf8.parse('0ae3105e45d6b52a'); // random 16 hexadecimal number as key
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
};

/**
 * 解密
 */
export const decrypt = (word) => {
  var key = CryptoJS.enc.Utf8.parse('0ae3105e45d6b52a'); // random 16 hexadecimal number as key
  var decrypt = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
};

/**
 * @description Load CSS style
 * @param {string} url
 * @return undefined
 */
export function loadStyles(url) {
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
}

/**
 * @description Remove CSS style
 * @param {string} url
 * @return undefined
 */
export function removeStyles(url) {
  let filename = url;
  let targetElement = 'link';
  let targetAttr = 'href';
  let allTags = document.getElementsByTagName(targetElement);
  for (let i = allTags.length; i >= 0; i--) {
    if (
      allTags[i] &&
      allTags[i].getAttribute(targetAttr) &&
      allTags[i].getAttribute(targetAttr).indexOf(filename) != -1
    ) {
      allTags[i].parentNode.removeChild(allTags[i]);
    }
  }
}
