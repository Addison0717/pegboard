const users = {
 1: {
   userId: 1,
   name: 'jose',
   notification:{
     match: [],
     request: [{
       requesterId:2,
       posterId: 1,
       postBody: {
         postId:1,
         description: 'looking for somebody',
         category: 'cooking'
       }
     },
     {
       requesterId:3,
       posterId: 1,
       postBody: {
         postId:1,
         description: 'looking for somebody',
         category: 'cooking'
       }
     },
     {
       requesterId:4,
       posterId: 1,
       postBody: {
         postId:1,
         description: 'looking for somebody',
         category: 'cooking'
       }
     }],
     posts: []
   }
 },
 2: {
     userId: 2,
     name: 'maria',
     notification:{
       match: [],
       request: [],
       posts: []
     }
   },
   3: {
       userId: 3,
       name: 'maria',
       notification:{
         match: [],
         request: [],
         posts: []
       }
     },
     4: {
         userId: 4,
         name: 'maria',
         notification:{
           match: [],
           request: [],
           posts: []
         }
       }}



export default (state = users, action = {}) => {

 switch (action.type) {
 case 'NEW_USER':
   return [...state, action.payload]
 case 'MAKE_REQUEST':
   return JSON.parse(JSON.stringify(state))[action.payload.posterId].notification.request.push(action.payload)
 // case 'MAKE_MATCH':
 //   return JSON.parse(JSON.stringify(state)).map((user)=>{
 //     if (user.userId=== action.payload.posterId) {
 //           user.notification.request = user.notification.request.filter((reqItem)=>{
 //             return reqItem.postBody.postId !== action.payload.postBody.postId
 //           })
 //
 //
 //           user.notification.match.push( action.payload)
 //
 //           return user
 //
 //
 //     }else {
 //       return user
 //     }
 //   })
 default:
   return state
 }
}
