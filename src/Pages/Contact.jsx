import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-gray-50 py-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              HUBUNGI KAMI
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami siap membantu Anda dengan pertanyaan atau saran seputar pajak
              daerah
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Information Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                INFORMASI KONTAK
              </h2>

              <div className="space-y-8">
                {/* Alamat */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Alamat</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Jl. Satria Sudirman No.1, Kelapa Dua Kabupaten Tangerang,
                      Banten 15810
                    </p>
                  </div>
                </div>

                {/* Telepon */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Telepon
                    </h3>
                    <p className="text-gray-600">(021) 5525522</p>
                    <p className="text-gray-600 mt-1">
                      WhatsApp:{" "}
                      <span className="font-medium">0812-3456-7890</span>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:bapenda@tangerangkab.go.id"
                      className="text-blue-600 hover:text-blue-700 hover:underline block"
                    >
                      bapenda@tangerangkab.go.id
                    </a>
                    <a
                      href="mailto:info.pajak@tangerangkab.go.id"
                      className="text-blue-600 hover:text-blue-700 hover:underline block mt-1"
                    >
                      info.pajak@tangerangkab.go.id
                    </a>
                  </div>
                </div>

                {/* Jam Layanan */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Jam Layanan
                    </h3>
                    <p className="text-gray-600">
                      Senin - Jumat: 08.00 - 16.00 WIB
                    </p>
                    <p className="text-gray-600 mt-1">Sabtu - Minggu: Tutup</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#002F8D] text-white py-3 px-6 rounded-full font-medium hover:bg-[#003BAD] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full">
              <div className="h-full min-h-125 lg:min-h-150">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507684.75712308526!2d106.02035945830714!3d-6.22581734527386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5e2bf058552b28d%3A0xaf9b96a32ee3a710!2sBAPENDA%20KOTA%20TANGERANG!5e0!3m2!1sid!2sid!4v1768203832479!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Bapenda Kabupaten Tangerang"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 bg-linear-to-r from-[#002F8D] to-blue-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Butuh Bantuan Segera?</h3>
              <p className="text-blue-100 mb-6">
                Tim customer service kami siap membantu Anda di hari kerja.
                Untuk pertanyaan di luar jam kerja, silakan kirim email dan kami
                akan merespons secepatnya.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/62215525522?text=Halo%20Bapenda,%20saya%20ingin%20bertanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#002F8D] py-3 px-8 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Telepon Sekarang
                </a>
                <a
                  href="mailto:bapenda@tangerangkab.go.id"
                  className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-medium hover:bg-white hover:text-[#002F8D] transition-colors duration-200"
                >
                  Kirim Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;
