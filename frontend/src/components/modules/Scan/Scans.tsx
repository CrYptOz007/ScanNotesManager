import { ScanContextProvider } from "./context/ScanContext"
import { ScanContent } from "./ScanContent/ScanContent"
import { ScanList } from "./ScanList"

export const Scans = () => {
    return (
        <ScanContextProvider>
            <div className="grid grid-cols-3">
                <ScanList />
                <ScanContent />
            </div>
        </ScanContextProvider>
    )
}