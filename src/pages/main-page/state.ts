import { CreateReactStore } from '../../shared/simple-state-meneger/index';

const initState = {
    scrollTop: 0,
    scrollHeight: 0,
}

//save scroll position on page in global state
export const { updateStore: updateMainPageStore , getStore: getMainPageStore} = CreateReactStore(initState)