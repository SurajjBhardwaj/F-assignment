import Home from "@/app/component/Home";
import TokenContextProvider from "@/context/TokenContextProvider";


export default function App() {
  return (
    <TokenContextProvider>
        <Home />
    </TokenContextProvider>
  );
}
