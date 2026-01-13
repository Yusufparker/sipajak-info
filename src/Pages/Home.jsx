import React from "react";
import { TrendingUp, User, ShieldCheck } from "lucide-react";

const Home = () => {
    const stats = [
        {
            icon: <TrendingUp />,
            value: "Rp. 450.000.000",
            label: "Total pendapatan pajak 2025",
            bgColor: "bg-green-500",
        },
        {
            icon: <User />,
            value: "125.000",
            label: "Wajib Pajak Terdaftar",
            bgColor: "bg-yellow-500",
        },
        {
            icon: <ShieldCheck />,
            value: "12",
            label: "Layanan Pajak Aktif",
            bgColor: "bg-blue-500",
        },
    ];

    const pajakTypes = [
        {
            title: "BPHTB",
            description:
            "Bea Perolehan Hak atas Tanah dan Bangunan adalah pajak yang dikenakan atas perolehan hak atas tanah dan/atau",
            tarif: "5%",
        },
        {
            title: "Pajak Hiburan",
            description:
            "Pajak atas penyelenggaraan hiburan seperti tontonan film, pagelaran kesenian, musik, tari, dan/atau busana, kontes kecantikan,",
            tarif: "5%",
        },
        {
            title: "Pajak Hotel",
            description:
            "Pajak yang dikenakan atas pelayanan yang disediakan oleh hotel dengan pembayaran, termasuk jasa penunjang sebagai",
            tarif: "5%",
        },
        {
            title: "Pajak Parkir",
            description:
            "Pajak yang dikenakan atas penyelenggaraan tempat parkir di luar badan jalan, baik yang disediakan berkaitan dengan pokok usaha",
            tarif: "5%",
        },
        {
            title: "Pajak Reklame",
            description:
            "Pajak atas penyelenggaraan reklame, yaitu benda, alat, perbuatan, atau media yang bentuk dan corak ragamnya dirancang",
            tarif: "5%",
        },
        {
            title: "Pajak Restoran",
            description:
            "Pajak atas pelayanan yang disediakan oleh restoran, meliputi rumah makan, kafetaria, kantin, warung, bar, dan sejenisnya",
            tarif: "5%",
        },
        {
            title: "PBB-P2 (Pajak Bumi dan Bangunan)",
            description:
            "Pajak atas bumi dan/atau bangunan yang dimiliki, dikuasai, dan/atau dimanfaatkan oleh orang pribadi atau Badan, kecuali",
            tarif: "5%",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-linear-to-b from-[#002F8D] to-[#5D93FF] text-white  py-50 px-4 ">
            <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Portal Informasi Pajak Daerah
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Kabupaten Tangerang
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                Pajak anda membangun daerah, wujudkan tangerang yang lebih baik
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-12 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-blue-800/50 backdrop-blur-sm rounded-xl px-6 py-15 hover:bg-blue-800/70 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center"
                >
                    <div
                    className={`${stat.bgColor} w-14 h-14 rounded-lg flex items-center justify-center text-white mx-auto mb-4`}
                    >
                    {stat.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {stat.value}
                    </h3>
                    <p className="text-sm text-blue-100">{stat.label}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Jenis Pajak Section */}
        <section className="py-16 px-15 ">
            <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Jenis jenis pajak daerah
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Kenali berbagai jenis pajak daerah dan kontribusi untuk
                pembangunan
                </p>
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pajakTypes.map((pajak, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pajak.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {pajak.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-700 font-medium text-sm">
                        Tarif Pajak
                    </span>
                    <span className="text-blue-600 font-bold text-lg">
                        {pajak.tarif}
                    </span>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
        </div>
    );
};

export default Home;
