import React, { useState } from 'react';

function Home() {
    const [ex, setEx] = useState(0);
    const [expenseList, setExpenseList] = useState([]);

    const addEx = (e) => {
        e.preventDefault();
        const description = document.getElementById("description").value;
        const amount = Number(document.getElementById("amount").value);

        if (description && amount > 0) {
            setEx(ex + amount);
            setExpenseList([...expenseList, { description, amount }]);

            // Clear the form fields
            document.getElementById("description").value = '';
            document.getElementById("amount").value = '';
        }
    };

    const clearEx = () => {
        setEx(0);
        setExpenseList([]);
    };

    return (
        <div className="bg-green-500 flex justify-between items-center max-w-screen p-6">
            {/* Left section - Form */}
            <div className="max-w-[500px] mx-auto bg-white p-8 rounded-xl shadow-xl min-h-[400px] flex-grow">
                <div className="logo flex justify-center mb-4">
                    <img src="/images/logo.png" alt="logo" width="130px" />
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
        style={{
            appearance: 'textfield', // For Firefox
            MozAppearance: 'textfield', // Another way to handle Firefox
            WebkitAppearance: 'none', // For WebKit browsers (Chrome, Safari, Edge)
        }}
    />
</div>

                    <div className="flex justify-between">
                        <button
                            type="submit"
                            onClick={addEx}
                            className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                            Add Expense
                        </button>
                        <button
                            type="button"
                            onClick={clearEx}
                            className="btn clear-btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                        >
                            Clear All Expenses
                        </button>
                    </div>
                </form>
            </div>

            {/* Right section - Expense List */}
            <div className="max-w-[500px] mx-auto bg-white p-8 pt-4 rounded-xl shadow-xl min-h-[400px] flex-grow">
                <p className="total text-lg font-medium mt-4 text-center">
                    Total Expenses of Nirav Mathukiya :: $
                    <span id="totalExpenses" className="total-expenses font-bold">{ex}</span>
                </p>
                <h2 className="text-xl font-bold mb-4 text-center">Expense List</h2>
                <div className="relative h-full">
                    {expenseList.length > 0 ? (
                        <ul className="space-y-2 h-[300px] overflow-y-auto pr-2">
                            {expenseList.map((expense, index) => (
                                <li key={index} className="flex justify-between border-b pb-2 border-gray-300 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200 shadow-sm">
                                    <span className="text-lg font-medium">{expense.description}</span>
                                    <span className="text-lg font-bold text-blue-600">${expense.amount}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center text-gray-500 mt-10">No expenses yet</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
