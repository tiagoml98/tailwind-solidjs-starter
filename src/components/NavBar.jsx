import logo from "../assets/logo.svg"

export function NavBar () {
    return (
        <header>
            <nav class="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://pocketbase.io/" class="flex items-center">
                        <img src={logo} class="mr-3 h-6 sm:h-9"
                             alt="PocketBase Logo"/>
                        <span
                            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">PocketBase Demo</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}