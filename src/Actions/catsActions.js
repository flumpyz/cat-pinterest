export const CAT_SET_INFO = 'CAT_SET_INFO';
export const CATS_GET_INFO = 'CATS_GET_INFO';
export const CAT_DELETE_INFO = 'CAT_DELETE_INFO';

export function setCatInfo(catInfo) {
    return {
        type: CAT_SET_INFO,
        payload: {
            catInfo: catInfo
        }
    }
}

export function getCatsInfo() {
    return {
        type: CATS_GET_INFO,
        payload: {}
    }
}

export function deleteCatInfo(catInfo) {
    return {
        type: CAT_DELETE_INFO,
        payload: {
            catInfo: catInfo
        }
    }
}