const users = [{
    userId: 1,
    name: 'jose',
    notification:{
      match: [],
      request: [{
        posterId: 3,
        postBody: {
          postId:1,
          description: 'looking for somebody',
          category: 'cooking'
        }
      },
      {
        posterId: 2,
        postBody: {
          postId:1,
          description: 'looking for somebody',
          category: 'cooking'
        }
      },
      {
        posterId: 4,
        postBody: {
          postId:1,
          description: 'looking for somebody',
          category: 'cooking'
        }
      }],
      posts: []
    }
  },
  {
      userId: 2,
      name: 'maria',
      notification:{
        match: [],
        request: [],
        posts: []
      }
    },
    {
        userId: 3,
        name: 'maria',
        notification:{
          match: [],
          request: [],
          posts: []
        }
      },
      {
          userId: 4,
          name: 'maria',
          notification:{
            match: [],
            request: [],
            posts: []
          }
        }]



export default (state = users, action = {}) => {

  switch (action.type) {
  case 'NEW_USER':
    return [...state, action.payload]
  case 'MAKE_REQUEST':
    return JSON.parse(JSON.stringify(state)).map((user) => {
      if (user.userId === action.payload.posterId) {
      user.notification.request.push(action.payload)
      return user
    }else {
      return user
    }})
  case 'MAKE_MATCH':
    return JSON.parse(JSON.stringify(state)).map((user)=>{
      if (user.userId=== action.payload.posterId) {
            user.notification.request = user.notification.request.filter((reqItem)=>{
              return reqItem.postBody.postId !== action.payload.postBody.postId
            })


            user.notification.match.push( action.payload)

            return user


      }else {
        return user
      }
    })
  default:
    return state
  }
}
