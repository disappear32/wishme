import {defineStore} from 'pinia';
import {responseData} from '../example';

interface State {
    name: string;
    id: number;
    url: string;
    wishlists: IWishList[];
    unsorted: IWishList[];
    drafts: IWishList[];
}

export const useUserStore = defineStore('user', {
    state: () : State => ({
        name: '',
        id: -1,
        url: '',
        wishlists: [],
        unsorted: [],
        drafts: [],
    }),
    actions: {
        setName(name: string) {
            this.name = name;
        },
        setId(id: number) {
            this.id = id;
        },
        setUrl(url: string) {
            this.url = url;
        },
        setWishlists(wishlists: IWishList[]) {
            this.wishlists = wishlists;
        },
        setUnsorted(unsorted: IWishList[]) {
            this.unsorted = unsorted;
        },
        setDrafts(drafts: IWishList[]) {
            this.drafts = drafts;
        },
        async fetchData() {
            const {
                name,
                id,
                url,
                wishlists,
                unsorted,
                drafts,
            } = responseData;

            this.setName(name);
            this.setId(id);
            this.setUrl(url);
            this.setWishlists(wishlists);
            this.setUnsorted(unsorted);
            this.setDrafts(drafts);
        },
    },
});