import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { wishlist } from 'model/wishlist.model'

export const ADD_WISHLIST   = '[WISHLIST] Add'
export const REMOVE_WISHLIST   = '[WISHLIST] Remove'


export class  AddWishlist implements Action{

    readonly type = ADD_WISHLIST


    //creating a class for each of the actions
    constructor(public payload: wishlist) {}
}

export class  RemoveWishlist implements Action{

    readonly type = REMOVE_WISHLIST


    //creating a class for each of the actions
    constructor(public payload: number) {}
}

export type Actions = AddWishlist | RemoveWishlist