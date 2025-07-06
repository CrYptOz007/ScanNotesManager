import { ScanContextProvider } from "./context/ScanContext"
import { ScanList } from "./ScanList"

export const Scans = () => {
    return (
        <ScanContextProvider>
            <div className="grid grid-cols-3">
                <ScanList />
                <div className="cols-span-2 flex items-center justify-center">
                    
                </div>
            </div>
        </ScanContextProvider>
    )
}