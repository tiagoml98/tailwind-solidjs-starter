import {createSignal, Show} from "solid-js";
import {pb} from "../App";
import {fetchData} from "./UserTable";



export function Login() {


    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");
    const [loggedIn, setLoggedIn] = createSignal(false);
    const [loginError, setLoginError] = createSignal(false);

    const login = async (event) => {
        event.preventDefault();

        try {
            const authData = await pb.collection('users').authWithPassword(
                email(),
                password(),
            );
        } catch {
            document.getElementById("loginemail").value = "";
            document.getElementById("loginpassword").value = "";
            setLoginError(true);
        }

        document.getElementById("loginemail").value = "";
        document.getElementById("loginpassword").value = "";

        setLoggedIn(pb.authStore.isValid)
    }

    const logout = async (event) => {
        event.preventDefault();

        pb.authStore.clear()
        setLoggedIn(pb.authStore.isValid)
    }

    return (
        <div class="flex bg-gray-50 dark:bg-gray-900 pt-6">
            <div class="w-full max-w-screen-xl px-4 lg:px-12">
                <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    <Show
                        when={loggedIn()}
                        fallback={
                            <form onSubmit={login}
                                  class="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                                <div class="flex">
                                    <input type="email" id="loginemail" onInput={e => setEmail(e.target.value)}
                                           class="mr-2 block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                           placeholder="Email" required/>
                                    <input type="password" id="loginpassword"
                                           onInput={e => setPassword(e.target.value)}
                                           class="mr-2 block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                           placeholder="Password" required/>
                                </div>
                                <button type="submit"
                                        class="flex items-center justify-self-end px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700">
                                    Login
                                </button>
                            </form>
                        }>
                        <form onSubmit={logout}
                              class="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                            <div class="flex font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Logged in as {pb.authStore.model.username}
                            </div>
                            <button type="submit"
                                    class="flex items-center justify-self-end px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700">
                                Logout
                            </button>
                        </form>
                    </Show>
                </div>
            </div>
        </div>
    )
}