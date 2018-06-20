export default (state = posts, action = {}) => {
 switch(action.type){
 case ‘ADD_POST’:

 let category = action.payload.category
   let type = action.payload.type
   // console.log(state[category][type], action.payload.type)
   state[category][type].push({
     posterId: null,
     postBody: {
       postId: null,
       name: action.payload.name,
       description: action.payload.description,
       category: null
     }
   })

   return {
     ...state,
   }


 default:
   return state
 }
}

const posts = {
    carpenter: {
      employer:[
        {
          posterId: 3,
          postBody: {
            postId:1,
            description: 'looking for somebody',
            category: 'cooking'
          }
        }
      ],
      freelancer: []
    },
    designer: {
      employer:[],
      freelancer: [{
        posterId: 2,
        postBody: {
          postId:1,
          description: 'looking for somebody',
          category: 'designing'
        }
      }]
    },
    cook: {
      employer:[],
      freelancer: []
    },
    developer: {
      employer:[],
      freelancer: []
    }
  }
