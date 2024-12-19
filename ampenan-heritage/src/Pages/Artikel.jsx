import { useState } from "react";
import { Link } from "react-router-dom";
import BackgroundP from "../Assets/Photoshop/bg-2.png";
import PatternP from "../Assets/Decors/pattern.png";
import BackgroundL from "../Assets/Photoshop/bg-ls.png";
import PatternL from "../Assets/Decors/pattern-ls.png";
import "../Utils/Styles.css";
import Navbar from "../Components/Navbar";
import RatingPopup from "../Components/RatingPopup";
import Htr1 from "./../Assets/Past/htr1.jpg";
import Htr2 from "./../Assets/Past/htr2.jpg";
import Htr4 from "./../Assets/Past/htr4.jpg";
import Htr5 from "./../Assets/Past/htr5.jpg";
import Htr6 from "./../Assets/Past/htr6.jpg";
import Htr7 from "./../Assets/Past/htr7.jpg";
import Htr8 from "./../Assets/Past/htr8.jpg";
import Htr9 from "./../Assets/Past/htr9.jpg";
import Htr10 from "./../Assets/Past/htr10.jpg";
import Htr11 from "./../Assets/Past/htr11.jpg";
import Htr12 from "./../Assets/Past/htr12.jpg";
import ContentB from "../Components/ContenB";
import ContentA from "../Components/ContenAt";
import ContentC from "../Components/ContentC";

const App = () => {
  const [showRatingPopup, setShowRatingPopup] = useState(false);

  const handleRatingClick = () => {
    console.log("Rating button clicked"); // Debugging
    setShowRatingPopup(true);
  };

  const handleClosePopup = () => {
    setShowRatingPopup(false);
  };

  return (
    <div className="w-screen min-h-screen px-4 overflow-hidden relative sm:px-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Background */}
      <div className="block sm:hidden">
        <img src={BackgroundP} alt="background" className="full-bg" />
        <img src={PatternP} alt="background" className="pattern" />
      </div>
      <div className="hidden sm:block">
        <img src={BackgroundL} alt="background" className="bg-ar" />
        <img src={PatternL} alt="background" className="pattern-4" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* NAVBAR */}
        <div className="block mb-8 sm:hidden">
          <Navbar onRatingClick={handleRatingClick} />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden sm:block">
          <ul className="flex flex-wrap justify-end items-center pt-12 pb-4 gap-8 mb-8">
            <li className="text-title text-h6 hover:text-primary">
              <Link to={"/home"}>Beranda</Link>
            </li>
            <li
              className="text-title text-h6 hover:text-primary cursor-pointer"
              onClick={handleRatingClick}
            >
              Beri Penilaian
            </li>
            <li className="text-title text-h6 hover:text-primary">
              <Link to={"/menu"}>Kembali</Link>
            </li>
          </ul>
        </div>

        {/* CONTENT */}
        {/* Historical Pictures */}
        <div className="mb-4">
          <h1 className="text-h3 font-bold text-y800 text-center md:text-start">
            Foto Bersejarah
          </h1>
          <p className="text-h6 text-y950 text-center md:text-start">
            Diabadikan semenjak masa kolonialisme di Kawasan Kota Toea
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:grid-cols-3">
          <ContentC 
          image={Htr1}
          title="NHM Bank (Netherland Indische Handel Maattjapis)"
          />
          <ContentC 
          image={Htr2}
          title="Jembatan Kali Jangkuk, Ampenan"
          />
          <ContentC 
          image={Htr4}
          title="TJUNG HWA Scholl"
          />
          <ContentC 
          image={Htr5}
          title="Pelabuhan Ampenan"
          />
          <ContentC 
          image={Htr6}
          title="Tempat Pertemuan Warga Belanda, Ampenan"
          />
          <ContentC 
          image={Htr7}
          title="Warga Lokal di Pantai Ampenan"
          />
          <ContentC 
          image={Htr8}
          title="Pasar Ampenan"
          />
          <ContentC 
          image={Htr9}
          title="Kantor Pegadaian Ampenan"
          />
          <ContentC 
          image={Htr10}
          title="TJUNG HWA Theatre (bioskop) Ampenan"
          />
          <ContentC 
          image={Htr11}
          title="Jembatan Sungai Jangkok sebelum di bangun"
          />
          <ContentC 
          image={Htr12}
          title="Gerbang kota Ampenan"
          />
        </div>

        {/* Heritage Spots */}
        <div className="mb-4">
          <h1 className="text-h3 font-bold text-y800 text-center md:text-start">
            Heritage Walk Kota Tua Ampenan: Napak Tilas Sejarah
          </h1>
          <p className="text-h6 text-y950 text-center md:text-start">
            Temukan jejak masa lampau yang kaya sejarah di Kota Tua Ampenan.
            Berikut adalah sorotan dari perjalanan kami :
          </p>
        </div>
        <ContentA
          title="1. Muara Sungai Jangkuk"
          description="Perjalanan dimulai dari muara Sungai Jangkuk, lokasi bersejarah tempat pasukan Belanda mendarat pada tahun 1894 untuk menginvasi Pulau Lombok. Dari tempat ini, Belanda memberikan ultimatum kepada Kerajaan Mataram, yang akhirnya menyerah hanya dalam empat bulan. Lokasi ini menyimpan banyak kenangan tentang masa lalu Ampenan sebagai pusat kekuatan politik dan ekonomi."
        />
        <ContentB
          title="2. Kampung Melayu dan Kejayaan Ekspor Sapi"
          description="Di Kampung Melayu, peserta tur mendengar cerita tentang kandang sapi, tempat penampungan sapi Lombok yang diekspor ke Singapura dan Hongkong pada abad ke-19. Profesi unik seperti Kleder, yang bertugas mengurus sapi di kapal, juga diceritakan, dengan nama terkenal Ncek Muhamad, seorang Kleder kawakan yang sering berlayar ke Hongkong."
        />
        <ContentA
          title="3. Hotel Tiga Emas dan Sekolah Islam Pertama"
          description="Hotel Tiga Emas, hotel pertama di Lombok, kini menjadi rumah pribadi tetapi tetap mempertahankan arsitektur aslinya. Di dekatnya, terdapat Madrasah al-Ittihadul Islamiyah, sekolah Islam pertama di Lombok yang berdiri sejak 1930 dan menjadi bukti kuat keberadaan pendidikan Islam di kawasan tersebut."
        />
        <ContentB
          title="4. Gudang Hookie dan Perdagangan Beras"
          description="Ampenan pada abad ke-19 terkenal dengan perdagangan berasnya, dengan Gudang Hookie sebagai salah satu saksi bisu masa kejayaan itu. Pada tahun 1880, 13 dari 39 bandar resmi di Ampenan adalah bandar beras, yang sebagian besar diekspor ke Manila dan China."
        />
        <ContentA
          title="5. Jejak Perkampungan Kristen dan SDN 11 Ampenan"
          description="Perkampungan Kristen di Kampung Melayu menjadi bagian penting dalam sejarah keberagaman Ampenan. Di sisi lain, SDN 11 Ampenan, yang dulunya adalah sekolah Tionghoa pertama di Ampenan, mencerminkan kontribusi komunitas Tionghoa dalam pendidikan sejak tahun 1929."
        />
        <ContentB
          title="6. Pabrik Legendaris: Sun An dan Wi Shin"
          description="Ampenan juga menjadi pusat industri pada masanya, dengan pabrik minyak goreng Sun An dan pabrik kecap Wi Shin yang masih beroperasi hingga kini. Tembok pabrik Sun An menjadi saksi kehadiran industri lokal yang berkembang sejak masa kolonial Belanda."
        />
        <ContentA
          title="7. Taman Jangkar dan Stanplat Ampenan"
          description="Taman Jangkar adalah terminal legendaris yang dikenal sebagai Stanplat Ampenan. Tempat ini dulunya adalah pusat transportasi menuju berbagai penjuru Lombok sebelum ditutup pada 1977. Di sekitarnya, terdapat bekas pabrik rokok Kuda Putih dan gardu listrik pertama di Lombok, yang dibangun oleh EBALOM pada 1930."
        />
        <ContentB
          title="8. Kawasan Pecinan dan Warisan Etnis Tionghoa"
          description="Jalan Pabean menyuguhkan nuansa Pecinan yang kental, dengan keberadaan kelenteng Po Kwa Kong yang telah ada sejak 1840-an. Komunitas Tionghoa memainkan peran penting dalam perdagangan dan ekonomi Ampenan sejak abad ke-19, menjalin hubungan erat dengan Kerajaan Mataram hingga masa penjajahan Belanda."
        />
        <ContentA
          title="9. Mercusuar Ampenan"
          description="Di menara mercusuar tepi pantai Ampenan, yang memberikan panorama indah dan menjadi simbol kejayaan masa lampau. Seluruh rute heritage walk ini memakan waktu sekitar dua jam, cukup untuk menggali berbagai kisah unik dari Kota Tua Ampenan."
        />

        {/* RATING POPUP */}
        <RatingPopup show={showRatingPopup} onClose={handleClosePopup} />
      </div>
    </div>
  );
};

export default App;
