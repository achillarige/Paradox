//
//  BaseService.swift
//  login
//
//  Created by Ananth Chillarige on 4/2/16.
//  Copyright © 2016 Ananth Chillarige. All rights reserved.
//

import Foundation
import Firebase

let BASE_URL="https://login-ios.firebaseio.com"
let FIREBASE_REF = Firebase(url:BASE_URL)


var CURRENT_USER: Firebase{
    
    let userID = NSUserDefaults.standardUserDefaults().valueForKey("uid") as! String
    let currentUser = Firebase(url: "\(FIREBASE_REF)").childByAppendingPath("users").childByAppendingPath("userID") //recieving user from db
    
    return currentUser! //returning user
}