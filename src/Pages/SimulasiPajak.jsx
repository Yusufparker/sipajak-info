import React, { useState } from "react";

const SimulasiPajak = () => {
    const [selectedPajak, setSelectedPajak] = useState("BPHTB");
    const [nilaiDasar, setNilaiDasar] = useState("");
    const [hasilPajak, setHasilPajak] = useState(null);

    const pajakTypes = [
        {
        id: "BPHTB",
        title: "BPHTB",
        description:
            "Bea Perolehan Hak atas Tanah dan Bangunan adalah pajak yang dikenakan atas perolehan hak atas tanah dan/atau bangunan",
        tarif: 5,
        npoptkp: 60000000,
        formula: (nilai) => {
            const npoptkp = 60000000;
            const dasar = Math.max(0, nilai - npoptkp);
            return dasar * 0.05;
        },
        },
        {
        id: "Pajak Hiburan",
        title: "Pajak Hiburan",
        description:
            "Pajak atas penyelenggaraan hiburan seperti tontonan film, pagelaran kesenian, musik, tari, dan/atau busana, kontes kecantikan,",
        tarif: 10,
        formula: (nilai) => nilai * 0.1,
        },
        {
        id: "Pajak Hotel",
        title: "Pajak Hotel",
        description:
            "Pajak yang dikenakan atas pelayanan yang disediakan oleh hotel dengan pembayaran, termasuk jasa penunjang sebagai",
        tarif: 10,
        formula: (nilai) => nilai * 0.1,
        },
        {
        id: "Pajak Parkir",
        title: "Pajak Parkir",
        description:
            "Pajak yang dikenakan atas penyelenggaraan tempat parkir di luar badan jalan, baik yang disediakan berkaitan dengan pokok usaha",
        tarif: 20,
        formula: (nilai) => nilai * 0.2,
        },
        {
        id: "Pajak Reklame",
        title: "Pajak Reklame",
        description:
            "Pajak atas penyelenggaraan reklame, yaitu benda, alat, perbuatan, atau media yang bentuk dan corak ragamnya dirancang",
        tarif: 25,
        formula: (nilai) => nilai * 0.25,
        },
        {
        id: "Pajak Restoran",
        title: "Pajak Restoran",
        description:
            "Pajak atas pelayanan yang disediakan oleh restoran, meliputi rumah makan, kafetaria, kantin, warung, bar, dan sejenisnya",
        tarif: 10,
        formula: (nilai) => nilai * 0.1,
        },
        {
        id: "PBB-P2",
        title: "PBB-P2 (Pajak Bumi dan Bangunan)",
        description:
            "Pajak atas bumi dan/atau bangunan yang dimiliki, dikuasai, dan/atau dimanfaatkan oleh orang pribadi atau Badan, kecuali",
        tarif: 0.5,
        njoptkp: 10000000,
        formula: (nilai) => {
            const njoptkp = 10000000;
            const dasar = Math.max(0, nilai - njoptkp);
            const njkp = dasar * 0.2;
            return njkp * 0.005;
        },
        },
    ];

    const currentPajak = pajakTypes.find((p) => p.id === selectedPajak);

    const hitungPajak = () => {
        const nilai = parseFloat(nilaiDasar);

        if (isNaN(nilai) || nilai <= 0) {
        alert("Mohon masukkan nilai yang valid");
        return;
        }

        const pajak = currentPajak.formula(nilai);
        setHasilPajak(pajak);
    };

    const formatRupiah = (angka) => {
        return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        }).format(angka);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-30">
        <div className="w-full max-w-2xl">
            <div className="bg-white rounded-3xl shadow-md p-10">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-2xl  text-gray-900 mb-2">
                SIMULASI PERHITUNGAN PAJAK
                </h1>
                <p className="text-sm text-gray-600">
                Hitung estimasi pajak yang harus dibayar dengan mudah dan cepat
                </p>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Jenis Pajak */}
                <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                    Jenis Pajak
                </label>
                <div className="relative">
                    <select
                    value={selectedPajak}
                    onChange={(e) => {
                        setSelectedPajak(e.target.value);
                        setNilaiDasar("");
                        setHasilPajak(null);
                    }}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 text-sm"
                    >
                    {pajakTypes.map((pajak) => (
                        <option key={pajak.id} value={pajak.id}>
                        {pajak.title}
                        </option>
                    ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    </div>
                </div>
                </div>

                {/* Nilai Dasar Pajak */}
                <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                    Nilai Dasar Pajak
                </label>
                <div className="relative">
                    <input
                    type="number"
                    value={nilaiDasar}
                    onChange={(e) => {
                        setNilaiDasar(e.target.value);
                        setHasilPajak(null);
                    }}
                    placeholder="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    </div>
                </div>
                </div>
            </div>

            {/* Info Box - tampil sebelum hasil */}
            {!hasilPajak && (
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
                <div className="flex gap-3">
                    <div className="shrink-0 mt-0.5">
                    <svg
                        className="w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </div>
                    <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                        Informasi {currentPajak.title}
                    </p>
                    <p className="text-xs text-gray-700 mb-2 leading-relaxed">
                        {currentPajak.description}
                    </p>
                    <p className="text-xs font-medium text-gray-900">
                        Tarif Pajak: {currentPajak.tarif}%
                    </p>
                    </div>
                </div>
                </div>
            )}

            {/* Button */}
            <button
                onClick={hitungPajak}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 mb-6"
            >
                <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
                </svg>
                Hitung Pajak
            </button>

            {/* Result */}
            {hasilPajak !== null && (
                <div className="bg-green-50 border border-green-300 rounded-2xl p-6">
                <p className="text-sm font-medium text-gray-700 mb-2">
                    Hasil Perhitungan
                </p>
                <p className="text-4xl font-bold text-green-600 mb-3">
                    {formatRupiah(hasilPajak)}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                    *Ini adalah estimasi perhitungan. Nilai aktual dapat berbeda
                    berdasarkan kebijakan dan kondisi spesifik.
                </p>
                </div>
            )}
            </div>
        </div>
        </div>
    );
};

export default SimulasiPajak;
