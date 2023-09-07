import { CreateReactStore } from '../../shared/simple-state-meneger/index';

const initState = {
    scrollTop: 0,
    scrollHeight: 0,
}

//state for save scroll position on page
export const { updateStore: updateScrollStore , getStore: getScrollStore} = CreateReactStore(initState)