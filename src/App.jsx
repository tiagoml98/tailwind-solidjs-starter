import 'flowbite';
import {NavBar} from "./components/NavBar";
import {TableHeader} from "./components/TableHeader";
import PocketBase from 'pocketbase';
import {UserTable} from "./components/UserTable";
import {Login} from "./components/Login";

export const pb = new PocketBase("https://pbdemo.fly.dev");
function App() {

  return (
      <div class="dark">
          <div>
              <NavBar/>
          </div>
          <div class="flex flex-col justify-center items-center h-screen bg-gray-50 dark:bg-gray-900 ">
              <TableHeader/>
              <Login />
              <UserTable />
          </div>
      </div>
  );
}

export default App;
