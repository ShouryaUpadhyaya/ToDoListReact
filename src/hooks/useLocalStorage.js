import React from "react";
import { useState, useEffect } from "react";
function useLocalStorage(id, key, value) {
  let passKey = `${id}${key}`;
  if (value) {
    localStorage.setItem(passKey, JSON.stringify(value));
  }
  return localStorage.getItem(key);
}

export default useLocalStorage;
