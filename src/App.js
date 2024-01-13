import {Header} from "./components/Header";
import Body from "./components/Body";
import resList from "./utils/mockData";

const App = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            {/* Body */}
            <Body resListData={resList} />
            {/* Footer */}
        </div>
    )
}

export default App;