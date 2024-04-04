import {createSignal} from "solid-js";
import {pb} from "../App";
import {fetchData} from "./UserTable";



export function TableHeader() {


    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");
    const [confirmPassword, setConfirmPassword] = createSignal("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            "email": email(),
            "password": password(),
            "passwordConfirm": confirmPassword(),
            "emailVisibility": true
        }

        const record = await pb
            .collection('users')
            .create(data)
            .catch((err) => console.error(err));

        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("passwordConfirm").value = "";

        await fetchData()
    }

    return (
        <div class="flex bg-gray-50 dark:bg-gray-900">
            <div class="w-full max-w-screen-xl px-4 lg:px-12">
                <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    <form onSubmit={handleSubmit}
                        class="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                        <div class="flex">
                            <input type="email" id="email" onInput={e => setEmail(e.target.value)}
                                   class="mr-2 block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="Email" required/>
                            <input type="password" id="password" onInput={e => setPassword(e.target.value)}
                                   class="mr-2 block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="Password" required/>
                            <input type="password" id="passwordConfirm" onInput={e => setConfirmPassword(e.target.value)}
                                   class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="Confirm Password" required/>
                        </div>
                        <button type="submit"
                                class="flex items-center justify-self-end px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-2 -ml-1"
                                 viewBox="0 0 20 20" fill="currentColor"
                                 aria-hidden="true">
                                <path
                                    d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                            </svg>
                            Add new user
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}