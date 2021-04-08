import { Action, ActionsSubject } from '@ngrx/store'
import { wishlist } from 'model/wishlist.model'
//import { n } from 'node:inspector'
import * as WishlistActions from 'src/app/actions/wishlist.actions'

const initialState: wishlist ={
    name: '',
    Price: ''
}

export function wishlistreducer(state : wishlist[] = [initialState], action: WishlistActions.Actions){


    switch(action.type){
        case WishlistActions.ADD_WISHLIST: 
        return [...state, action.payload]; 

        case WishlistActions.REMOVE_WISHLIST: 
        state.splice(action.payload,1)
        return state; 

        default: 
        return state; 
    }
}