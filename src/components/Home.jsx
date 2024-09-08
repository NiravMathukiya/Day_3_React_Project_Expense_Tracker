import React, { useState } from 'react'

function Home() {
    const [ex, setex] = useState(0);

    const addex = (e) => {
        e.preventDefault();
        setex(ex + Number(document.getElementById("amount").value));
    };

    const clearex = () => {
        setex(0);
    }

    return (
        <div className='bg-green-500 flex justify-between items-center max-w-screen p-6'>
            <div className="max-w-[500px] mx-auto bg-white p-8 rounded-xl">
                <div className="logo flex justify-center mb-4">
                    <img src="./" alt="" width="130px" />
                </div>
                <h1 className="text-3xl font-bold text-center mb-6">Expense Tracker</h1>
                <form id="expenseForm" className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="description" className="block text-lg font-medium">Description:</label>
                        <input
                            type="text"
                            id="description"
                            className="form-control w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount" className="block text-lg font-medium">Amount:</label>
                        <input
                            type="number"
                            id="amount"
                            className="form-control w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            onClick={addex}
                            className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                            Add Expense
                        </button>
                        <button
                            type="button"
                            onClick={clearex}
                            className="btn clear-btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                        >
                            Clear All Expenses
                        </button>
                    </div>
                </form>
                <div id="expenses" className="expenses-list mt-6 space-y-2"></div>
                <p className="total text-lg font-medium mt-4">
                    Total Expenses of Nirav Mathukiya :: $
                    <span id="totalExpenses" className="total-expenses font-bold">{ex}</span>
                </p>

            </div>
            <div className='max-w-[500px] mx-auto bg-white p-8 rounded-xl' id='list'></div>
        </div>
    )
}

export default Home
