import {createSignal, For, onCleanup} from "solid-js";
import {pb} from "../App";


const [records, setRecords] = createSignal([]);

export const fetchData = async () => {
    const response = await pb.collection('users').getFullList({
        sort: '-created',
    });
    setRecords(response);
};

export function UserTable() {
    fetchData();

    return (
        <div class="flex ">
            <div class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                    <div class="dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-4 py-3"></th>
                                    <th scope="col" class="text-center px-4 py-3">id</th>
                                    <th scope="col" class="text-center justify-center px-4 py-3">username</th>
                                    <th scope="col" class="text-center justify-center px-4 py-3">email</th>
                                </tr>
                                </thead>
                                <tbody>
                                <For each={records()}>
                                    {(record, index) => (
                                        <tr class="border-b dark:border-gray-700">
                                            <th scope="row"
                                                class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index() + 1}</th>
                                            <td class="px-4 py-3">{record.id}</td>
                                            <th class="px-4 py-3">{record.username}</th>
                                            <td class="px-4 py-3">{record.email}</td>
                                        </tr>
                                    )}
                                </For>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}