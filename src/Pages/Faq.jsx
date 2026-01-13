import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState("Semua");

    const categories = ["Semua", "Pembayaran", "PBB", "Pajak Restoran", "Umum"];
    const faqData = [
        {
            id: 1,
            category: "Pembayaran",
            question: "Bagaimana cara membayar pajak daerah secara online?",
            answer:
            "Anda bisa membayar pajak daerah secara online melalui beberapa cara: (1) Website resmi Bapenda Kabupaten Tangerang, (2) Mobile banking dari bank yang bekerja sama, (3) ATM bank, (4) E-wallet seperti GoPay, OVO, Dana, dan LinkAja. Pastikan Anda memiliki Nomor Objek Pajak (NOP) atau nomor pembayaran yang valid.",
        },
        {
            id: 2,
            category: "Pembayaran",
            question: "Apa yang harus dilakukan jika pembayaran gagal?",
            answer:
            "Jika pembayaran gagal, pertama cek saldo rekening Anda apakah mencukupi. Cek juga apakah data NOP/nomor pembayaran sudah benar. Jika masih gagal, coba metode pembayaran lain atau hubungi customer service Bapenda di (021) xxxx-xxxx atau email bapenda@tangerangkab.go.id. Pastikan untuk menyimpan bukti transaksi gagal tersebut.",
        },
        {
            id: 3,
            category: "PBB",
            question: "Bagaimana cara mengetahui jumlah tagihan PBB saya?",
            answer:
            "Anda bisa mengecek tagihan PBB dengan beberapa cara: (1) Melalui website Bapenda dengan memasukkan NOP, (2) SMS ke nomor layanan dengan format 'PBB[spasi]NOP', (3) Datang langsung ke kantor Bapenda, (4) Melalui aplikasi mobile banking dengan menu info PBB, atau (5) Menghubungi call center Bapenda.",
        },
        {
            id: 4,
            category: "PBB",
            question: "Kapan batas waktu pembayaran PBB?",
            answer:
            "Batas waktu pembayaran PBB adalah 30 September setiap tahunnya. Pembayaran setelah tanggal tersebut akan dikenakan denda 2% per bulan dari pajak yang terutang. Kami menyarankan untuk membayar lebih awal agar tidak terkena denda dan untuk memanfaatkan diskon jika ada program pembayaran lebih awal.",
        },
        {
            id: 5,
            category: "PBB",
            question: "Apa yang harus dilakukan jika kehilangan SPPT PBB?",
            answer:
            "Jika SPPT hilang: (1) Datang ke kantor Bapenda atau akses website resmi, (2) Ajukan permohonan cetak ulang SPPT dengan membawa KTP dan bukti kepemilikan tanah/bangunan, (3) Isi formulir permohonan, (4) SPPT dapat dicetak ulang pada hari yang sama atau dikirim via email. Tidak ada biaya untuk cetak ulang SPPT.",
        },
        {
            id: 6,
            category: "Pajak Restoran",
            question: "Berapa tarif Pajak Restoran di Kabupaten Tangerang?",
            answer:
            "Tarif Pajak Restoran di Kabupaten Tangerang adalah 10% dari total pembayaran (termasuk service charge). Tarif ini berlaku untuk semua jenis restoran, rumah makan, kafe, warung makan, dan usaha sejenis yang menyediakan makanan dan/atau minuman dengan dipungut bayaran.",
        },
        {
            id: 7,
            category: "Pajak Restoran",
            question: "Apakah delivery order dan takeaway juga dikenakan pajak?",
            answer:
            "Ya, semua penjualan makanan dan minuman termasuk delivery order, takeaway, dan catering juga dikenakan Pajak Restoran sebesar 10%. Yang menjadi dasar pengenaan pajak adalah total pembayaran yang diterima dari konsumen, tidak peduli apakah konsumen makan di tempat atau dibawa pulang.",
        },
        {
            id: 8,
            category: "Umum",
            question:
            "Apa saja jenis pajak daerah yang dipungut di Kabupaten Tangerang?",
            answer:
            "Jenis pajak daerah yang dipungut meliputi: (1) Pajak Bumi dan Bangunan Perdesaan dan Perkotaan (PBB-P2), (2) Pajak Restoran, (3) Pajak Hotel, (4) Pajak Hiburan, (5) Pajak Reklame, (6) Pajak Penerangan Jalan, (7) Pajak Parkir, (8) Pajak Air Tanah, dan (9) Pajak Mineral Bukan Logam dan Batuan.",
        },
        {
            id: 9,
            category: "Umum",
            question: "Bagaimana cara mengecek tunggakan pajak?",
            answer:
            "Anda dapat mengecek tunggakan pajak dengan cara: (1) Melalui website Bapenda dengan login menggunakan NIK/NPWPD, (2) Datang langsung ke kantor Bapenda, (3) Hubungi call center dengan menyebutkan NIK dan NOP, (4) Melalui aplikasi mobile Bapenda yang dapat diunduh di Play Store/App Store. Informasi tunggakan akan ditampilkan secara lengkap beserta dendanya.",
        },
        {
            id: 10,
            category: "Umum",
            question: "Bagaimana cara menghubungi customer service Bapenda?",
            answer:
            "Anda dapat menghubungi customer service Bapenda melalui: (1) Call center: (021) xxxx-xxxx (hari kerja 08.00-16.00 WIB), (2) WhatsApp: 08xxx-xxxx-xxxx, (3) Email: bapenda@tangerangkab.go.id, (4) Website: www.bapenda.tangerangkab.go.id dengan fitur live chat, (5) Media sosial: Instagram dan Facebook @bapendatangerangkab. Tim kami siap membantu Anda.",
        },
    ];


    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const filteredFaqs =
        activeCategory === "Semua"
        ? faqData
        : faqData.filter((faq) => faq.category === activeCategory);

    return (
        <div className="min-h-screen bg-white py-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
                PERTANYAAN YANG SERING DIAJUKAN
            </h1>
            <p className="text-gray-600">
                Temukan jawaban atas pertanyaan umum seputar pajak daerah
            </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category
                    ? "bg-[#002F8D] text-white"
                    : "bg-[#002F8D] text-white hover:bg-[#003BAD]"
                }`}
                >
                {category}
                </button>
            ))}
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3">
            {filteredFaqs.map((faq, index) => (
                <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-200"
                >
                <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
                >
                    <div className="flex items-center gap-3">
                    <span className="text-gray-400 font-bold text-xl">⊛</span>
                    <span className="text-gray-900 font-normal">
                        {faq.question}
                    </span>
                    </div>
                    {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                    ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                    )}
                </button>

                {activeIndex === index && (
                    <div className="px-6 pb-5 pt-0 bg-gray-50">
                    <div className="pl-8 text-gray-700 leading-relaxed text-sm">
                        {faq.answer}
                    </div>
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default Faq;
