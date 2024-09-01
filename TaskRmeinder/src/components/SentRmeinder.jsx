export  default function SentReminder (){
    return(
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  w-full h-full">
                <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                    <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
                        <tr className="border border-red-600">
                            <th scope="col" className="px-6 py-3 w-1/12 text-left">Title</th>
                            <th scope="col" className="px-6 py-3 w-7/12 text-left">Description</th>
                            <th scope="col" className="px-6 py-3 w-2/12 text-left">Due Date</th>
                            <th scope="col" className="px-6 py-3 w-2/12 text-left">Priority</th>
                            <th scope="col" className="px-6 py-3 w-2/12 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-blue-500 border-b border-blue-400 h-11">
                            <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">Test</td>
                            <td className="px-6 py-4">Test</td>
                            <td className="px-6 py-4">Test</td>
                            <td className="px-6 py-4">Test</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-white hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="bg-blue-600 border-b border-blue-400 h-11">
                            <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">Test</td>
                            <td className="px-6 py-4">Test1</td>
                            <td className="px-6 py-4">Test1</td>
                            <td className="px-6 py-4">Test1</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-white hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}