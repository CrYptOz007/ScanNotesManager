import { ListItem } from "@generic/List/ListItem"
import { useContext } from "react";
import { ScanContext } from "./context/ScanContext";

export const ScanList = () => {
    const { activeScan, setActiveScan, scans, isScansLoading } = useContext(ScanContext);

    return (
        <div className="border-r border-gray-300 shadow-md flex flex-col h-screen overflow-y-auto">
            {isScansLoading ? (
                <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">Loading scans...</p>
                </div>
            ) : scans?.payload ? (
                <>
                    {scans?.payload.map(scan => (
                        <ListItem
                            key={scan.id}
                            active={activeScan?.id === scan.id}
                            onClick={() => setActiveScan(scan)}
                            className="cursor-pointer"
                        >
                            <h3 className="text-lg font-semibold">ID: {scan.id}</h3>
                            <p className="text-xs text-gray-400">Created at: {new Date(scan.createdAt).toLocaleDateString()}</p>
                        </ListItem>
                    ))}
                </>
            ) : (
                <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">No scans available</p>
                </div>
            )}
        </div>
    );
}