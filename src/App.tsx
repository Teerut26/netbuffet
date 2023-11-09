import { useState } from "react";
import "./App.css";

function App() {
    const [ServiceCharge, setServiceCharge] = useState(0);
    const [Vat, setVat] = useState(7);
    const [Price, setPrice] = useState(0);

    const getRealPrice = () => {
        return Price + (Price * Vat) / 100 + (Price * ServiceCharge) / 100;
    };

    const setVatCondition = (vat: string) => {
        if (vat === "") {
            setVat(7);
            return;
        } else if (Number(vat) === 0) {
            setVat(0);
        } else {
            setVat(Number(vat));
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center px-5 relative">
            <div className="flex flex-col gap-3 max-w-md">
                <div className="flex justify-center text-5xl font-bold">
                    Net Buffet
                </div>
                <div className="flex gap-2">
                    <input
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="border-4 border-gray-300 focus:border-blue-400 outline-none bg-gray-200 focus:bg-blue-100 duration- ease-in p-3 w-full text-3xl rounded-xl"
                        type="text"
                        placeholder="Price"
                        pattern="[0-9]*"
                        inputMode="numeric"
                    />
                </div>
                <div className="flex gap-2">
                    <input
                        onChange={(e) => setVatCondition(e.target.value)}
                        placeholder="Vat"
                        className="border-4 border-gray-300 focus:border-blue-400 outline-none bg-gray-200 focus:bg-blue-100 duration- ease-in p-3 w-full text-3xl rounded-xl"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                    />
                </div>
                <div className="flex gap-2">
                    <input
                        onChange={(e) =>
                            setServiceCharge(Number(e.target.value))
                        }
                        placeholder="Service Charge"
                        className="border-4 border-gray-300 focus:border-blue-400 outline-none bg-gray-200 focus:bg-blue-100 duration- ease-in p-3 w-full text-3xl rounded-xl"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                    />
                </div>

                <div className="flex flex-col items-center mt-3">
                    <div className="text-5xl font-bold mb-3">
                        {getRealPrice().toFixed(2)}
                    </div>
                    <div>
                        Price Label :{" "}
                        <span className="text-lg font-bold">
                            {Price.toFixed(2)}
                        </span>
                    </div>
                    <div>
                        Vat : <span className="text-lg font-bold">{Vat}%</span>
                    </div>
                    <div>
                        Service Charge :{" "}
                        <span className="text-lg font-bold">
                            {ServiceCharge}%
                        </span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 py-3">
                สร้างโดย{" "}
                <a
                    target="_blank"
                    className="underline text-blue-500"
                    href="https://www.facebook.com/teerut26"
                >
                    Teerut Srithongdee
                </a>
            </div>
        </div>
    );
}

export default App;
