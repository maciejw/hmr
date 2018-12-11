import { createContext } from "react";


const AppContext = createContext<AppContext.Context>({
  unregister: () => { },
  register: () => () => { }

})
namespace AppContext{
  export interface Context {
    unregister<R>(params: R): void;
     register<R>(params: R): () => void }

}

export default AppContext