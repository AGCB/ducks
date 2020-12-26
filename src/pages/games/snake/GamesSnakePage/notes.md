# snake

  - pull up the counterSlice and duplicate everything. To start, we just want boolean state added to redux.
  - what is the least amount of changes needed for this?
    - snake reducer needs to be passed to the store.
      - nice to see that we could list a ton of reducers here
    - snakeSlice needs to be created.
      - import createSlice
      - define a snakeSlice of createSlice({})
        - name: sliceName
        - initialState: obj
        - reducers: {
          - every key is a reducer name.
          - every value is a function taking state as input.
          - just set some piece of state how you'd like in the function
          - immer deals with the return under the hood.
          - nice!

        }
      - destructure actions off of snakeSlice.actions...
        - how does this play out under the hood?
        - we didn't actually define .actions.
        - you actually use the reducer names.
        - will this pattern hold up over nested updates?

      - define a selector.
        - function with state as input.
        - return whatever slice you want.
        - in this case "state" is root level of your store.
      - export default snakeSlice.reducer
