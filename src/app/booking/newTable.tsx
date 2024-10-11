import React, { useState, useEffect } from "react";
import { tableData } from "../../../utils/typeStorage/tableType";
import bookingFetcher from "../../../utils/core/fetcher/tableFetcher/bookingFetcher";
import { periodData } from "../../../utils/typeStorage/periodType";

interface Prop {
    period?: periodData;
    tableList?: tableData[];
    date?: Date;
}

interface ModalProps {
    isOpen: boolean;
    table?: tableData;
    period: periodData;
    date: Date;
    onClose: () => void;
    isLoading: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, table, period, date, onClose, isLoading }) => {
    if (!isOpen || !table) return null;

    const handleConfirm = async () => {
        if (!isLoading) {
            date.setDate(date.getDate() + 1);
            await new bookingFetcher().addBooking(13, table.table_id, period.period_id, date.toISOString().split("T")[0]);
            onClose();
            window.location.reload(); // Refresh the page
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg relative">
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded"
                    disabled={isLoading}
                >
                    Close
                </button>
                <h2 className="text-2xl mb-4 text-black">{table.table_name}</h2>
                <img 
                    src={table.table_pic || "https://www.glitz.co.th/wp-content/uploads/2022/06/hercules-series-9-x-40-antique-rustic-solid-pine-folding-farm-table-xa-f-108x40-gg-2_lighter.jpg"} 
                    alt="Table picture" 
                    width="250px"
                    className="mb-4" 
                />
                <p className="mb-4">{table.table_description}</p>
                <div className="flex justify-center space-x-4">
                    <button 
                        className={`bg-green-500 text-white p-2 rounded ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`} 
                        onClick={handleConfirm}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "Confirm"}
                    </button>
                    <button onClick={onClose} className={`bg-red-500 text-white p-2 rounded ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`} disabled={isLoading}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function NewTable({ tableList, period, date }: Prop) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTable, setSelectedTable] = useState<tableData | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = (table: tableData) => {
        setSelectedTable(table);
        setIsModalOpen(true);
    };

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isModalOpen]);

    return (
        <div className="w-full h-full m-5 max-w-6xl">
            {tableList && period && date ? (
                <>
                    <div className="rounded-t-xl border text-center bg-white text-black">
                        Select your table
                    </div>
                    <div className="rounded-b-xl border grid grid-cols-1 w-full max-h-96 overflow-y-auto">
                        {tableList.map((table) => (
                            <TableButton key={table.table_id} table={table} onClick={handleButtonClick} />
                        ))}
                    </div>
                    <Modal 
                        isOpen={isModalOpen} 
                        table={selectedTable} 
                        period={period} 
                        date={date} 
                        onClose={() => setIsModalOpen(false)} 
                        isLoading={isLoading} 
                    />
                </>
            ) : (
                <div className="border w-full h-full m-5 max-w-6xl text-center">
                    <div className="text-3xl">
                        Please select your time period
                    </div>
                </div>
            )}
        </div>
    );
}

interface TableButtonProps {
    table: tableData;
    onClick: (table: tableData) => void;
}

const TableButton: React.FC<TableButtonProps> = ({ table, onClick }) => (
    <button 
        className="rounded-xl border flex flex-col min-h-44 m-3 overflow-hidden" 
        onClick={() => onClick(table)}
    >
        <img 
            src={table.table_pic || "https://www.glitz.co.th/wp-content/uploads/2022/06/hercules-series-9-x-40-antique-rustic-solid-pine-folding-farm-table-xa-f-108x40-gg-2_lighter.jpg"} 
            alt="Table picture" 
            width="250px"
        />
        <div className="text-start text-4xl">{table.table_name}</div>
        <div className="border text-start w-full">
            {table.table_description || "This is a table"}
        </div>
    </button>
);
