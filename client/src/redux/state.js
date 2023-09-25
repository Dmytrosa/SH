import ProfileReducer from "./profileReducer";

const GETDATA =() => 'GET-DATA';

let store = {
  _data: {
   profelipage:{}
  },

 RenderTree() { },

  subscribe(observer) {
    this.RenderTree = observer;
  },
 
  dispatch(action){

  this._data = ProfileReducer (this._data, action)
  this.RenderTree(this._data);
  this.RenderTree(this._data);
   if (action.type === GETDATA){
    return this._data;
  }
  this.RenderTree(this._data);
  },
};

window.data = store._data;
// export default store
