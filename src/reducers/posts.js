export default (state = posts, action = {}) => {
  switch(action.type){
  case 'MAKE_POST':

    let category = action.payload.category
    let type = action.payload.type
    // console.log(state[category][type], action.payload.type)
    state[category][type].push({
      postId: null,
      name: action.payload.name,
      description: action.payload.description,
      categoryId: null
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
      employer:[{
        postId: null,
        name: "Bills Carpentry",
        description: "Only the best carpentry in the Amsterdam Area",
        categoryId: null
      }],
      freelancer: [{
        postId: null,
        name: "Mike Woodman",
        description: "I am Mike and I like Carpentry",
        categoryId: null
      }]
    },
    designer: {
      employer:[{
        postId: null,
        name: "ABC Designs",
        description: "Premier Designs at Premier Prices",
        categoryId: null
      }],
      freelancer: [{
        postId: null,
        name: "Donna Designalot",
        description: "Im Donna and I like to design",
        categoryId: null
      }]
    },
    cook: {
      employer:[{
        postId: null,
        name: "Libertine Cantina",
        description: "The best looking food in Amsterdam!",
        categoryId: null
      }],
      freelancer: [{
        postId: null,
        name: "Dylan Cooker",
        description: "Im Dylan and I like to cook!",
        categoryId: null
      }]
    },
    developer: {
      employer:[{
        postId: null,
        name: "Codaisseur Academy",
        description: "Training the best junior developers in Amsterdam",
        categoryId: null
      }],
      freelancer: [{
        postId: null,
        name: "Cody Codesalot",
        description: "Im Cody and I like to code a lot",
        categoryId: null
      }]
    }
  }
