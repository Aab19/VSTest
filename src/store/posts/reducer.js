import {
  DISLIKE_ALL_POST,
  DISLIKE_POST,
  LIKE_ALL_POST,
  LIKE_POST,
  RESET_ALL_POST,
} from './action'

const initialState = {
  data: [
    {
      id: 1,
      image:
        'https://milenianews.com/wp-content/uploads/2022/02/macbook-pro-2021-cnet-review-21.jpg',
      likes: 0,
    },
    {
      id: 2,
      image:
        'https://media.cnn.com/api/v1/images/stellar/prod/211025072623-macbook-pro-14-display-5.jpg?q=x_0,y_0,h_2268,w_4030,c_fill/w_800',
      likes: 0,
    },
    {
      id: 3,
      image:
        'https://www.cnet.com/a/img/resize/aba646bbfefdaae2a6aed6d516512f33e3b3a0c9/hub/2022/07/12/995173ef-de01-45be-a714-c5d581f4bd5c/macbook-air-m2-2022-2.jpg?auto=webp&width=1200',
      likes: 0,
    },
  ],
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_POST:
      return {
        ...state,
        data: state.data.map(item =>
          item.id === action.payload ? {...item, likes: item.likes + 1} : item,
        ),
      }
    case DISLIKE_POST:
      return {
        ...state,
        data: state.data.map(item =>
          item.id === action.payload
            ? {...item, likes: Math.max(item.likes - 1, 0)}
            : item,
        ),
      }
    case LIKE_ALL_POST:
      return {
        ...state,
        data: state.data.map(item => ({...item, likes: item.likes + 1})),
      }
    case DISLIKE_ALL_POST:
      return {
        ...state,
        data: state.data.map(item => ({
          ...item,
          likes: Math.max(item.likes - 1, 0),
        })),
      }
    case RESET_ALL_POST:
      return {
        ...state,
        data: state.data.map(item => ({...item, likes: 0})),
      }
    default:
      return state
  }
}

export default postsReducer
