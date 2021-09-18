import {  useRef } from "react";
import {debounce} from 'lodash';

const useDebounce = (callback: (...args:any[]) => void, delay: number) => {
  const debounceHandler= useRef(
    debounce(callback, delay)
  ).current;
  return debounceHandler;
};
export default useDebounce;
