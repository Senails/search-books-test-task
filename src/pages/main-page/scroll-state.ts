import { createEasyStore } from 'easy-state-meneger-react';

const initState = {
    scrollTop: 0,
    scrollHeight: 0,
}

//state for save scroll position on page
export const { updateStore: updateScrollStore , getStore: getScrollStore} = createEasyStore(initState)