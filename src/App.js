import React, { createContext } from "react";
import "./App.css";
import Props from "./component/reactcomponent/Props";
import PropsType from "./component/reactcomponent/PropsType";
import Customer from "./component/reactcomponent/Customer";
import ClickButton from "./component/reactcomponent/ClickButton";
import Mounting1 from "./component/reactcomponent/Mounting1";
import Updating1 from "./component/reactcomponent/Updating1";
import Person from "./component/reactcomponent/Person";
import UnMountParent from "./component/reactcomponent/UnMountParent";
import USComponent from "./component/reactcomponent/USComponent";
import HookCounter from "./component/reactcomponent/HookCounter";
import UsWithObject from "./component/reactcomponent/UsWithObject";
import USWithArray from "./component/reactcomponent/USWithArray";
import UseEffect from "./component/reactcomponent/UseEffect";
import StopWatch from "./component/reactcomponent/StopWatch";
import MyTasks from "./component/reactcomponent/MyTask";
import UnreadCount from "./component/reactcomponent/UnReadCount";
import YearSpinner from "./component/reactcomponent/YearSpinner";
import UsEffect2 from "./component/reactcomponent/UsEffect2";
import UsCleanUp from "./component/reactcomponent/UsCleanUp";
import Table from "./component/reactcomponent/Table";
import DataFetching from "./component/reactcomponent/DataFetching ";
import RenderC1C2 from "./component/reactcomponent/RenderC1C2";
import MapMethod from "./component/reactcomponent/MapMethod";
import MapInTable from "./component/reactcomponent/MapInTable";

import CompA from "./UseContextApi/CompA";
// const friends = ["raghav ", "raj", "semma"];

export const NameContext = createContext();
export const HelloContext = createContext();

function App() {
  return (
    <div className="app">
      {/* <Props name = {36} age = "heloo"  /> */}
      {/* <PropsType name="Pooja " age={34} isMarried={false} arr={friends} /> */}
      {/* <Customer name ="Pooja"  age={34} occupation = "Engineer"/> */}

      {/* <ClickButton  name ="Pooja"/> */}
      {/* <Mounting1 city ="Ahmedabad"/> */}
      {/* <Updating1 />  */}
      {/* <Person  city ="Banglore"/> */}
      {/* <UnMountParent /> */}
      {/* <USComponent/> */}
      {/* <HookCounter/> */}
      {/* <UsWithObject /> */}
      {/* <USWithArray /> */}
      {/* <UseEffect /> */}
      {/* <UsCleanUp /> */}
      {/* <Table /> */}
      {/* <DataFetching /> */}
      {/* <RenderC1C2 /> */}
      {/* <MapMethod /> */}
      {/* <UsEffect2 /> */}
      {/* <StopWatch /> */}
      {/* <MyTasks/> */}
      {/* <UnreadCount/> */}
      {/* <YearSpinner defaultValue={1988} /> */}
      {/* <MapInTable/> */}
      <NameContext.Provider value={"Pooja"}>
        <HelloContext.Provider value={"Hello World"}>
          <CompA />
        </HelloContext.Provider>
      </NameContext.Provider>
    </div>
  );
}

export default App;
