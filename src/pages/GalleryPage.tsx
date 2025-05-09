
import React from "react";
import { Link } from "react-router-dom";

const GalleryPage = () => {
  const images = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Ionic_bonding.svg/800px-Ionic_bonding.svg.png",
      title: "Иондық байланыстың сызбасы",
      description: "Натрий мен хлор арасындағы иондық байланыстың түзілу сызбасы",
    },
    {
      id: 2,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Kovalente_binding.svg/800px-Kovalente_binding.svg.png",
      title: "Коваленттік байланыс",
      description: "Электрондық жұптарды бөлісу арқылы коваленттік байланыстың түзілуі",
    },
    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/NaCl_polyhedra.png/640px-NaCl_polyhedra.png",
      title: "Натрий хлоридінің кристалдық құрылымы",
      description: "Иондық байланыстың мысалы: натрий хлориді (NaCl)",
    },
    {
      id: 4,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/3D_model_hydrogen_bonds_in_water.svg/640px-3D_model_hydrogen_bonds_in_water.svg.png",
      title: "Су молекуласының үшөлшемді моделі",
      description: "Су молекуласындағы коваленттік байланыстар мен сутектік байланыстар",
    },
    {
      id: 5,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Metal_crystal_structure_bcc.svg/640px-Metal_crystal_structure_bcc.svg.png",
      title: "Металдың кристалдық торы",
      description: "Металдық байланыстың көрсетілімі: ОЦК құрылымы",
    },
    {
      id: 6,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Water_molecule_3D.svg/640px-Water_molecule_3D.svg.png",
      title: "Су молекуласы",
      description: "H₂O молекуласының үшөлшемді моделі",
    },
    {
      id: 7,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Carbon_dioxide_3D_spacefill.png/640px-Carbon_dioxide_3D_spacefill.png",
      title: "Көмірқышқыл газы",
      description: "CO₂ молекуласы: екі қос коваленттік байланыс",
    },
    {
      id: 8,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Electron_shell_001_Hydrogen_-_no_label.svg/640px-Electron_shell_001_Hydrogen_-_no_label.svg.png",
      title: "Сутегі атомы",
      description: "Сутегі атомының электрондық қабаты",
    },
    {
      id: 9,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Electron_shell_008_Oxygen_-_no_label.svg/640px-Electron_shell_008_Oxygen_-_no_label.svg.png",
      title: "Оттегі атомы",
      description: "Оттегі атомының электрондық қабаттары",
    },
  ];

  return (
    <div>
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold">Химиялық байланыстар галереясы</h1>
        <div className="flex justify-end text-sm text-blue-600">
          <Link to="#" className="hover:underline mx-2">Талқылау</Link>
          <Link to="#" className="hover:underline mx-2">Өңдеу</Link>
          <Link to="#" className="hover:underline mx-2">Тарихы</Link>
        </div>
      </div>
      
      <p className="mb-8 text-justify">
        Бұл бетте химиялық байланыстарға қатысты түрлі суреттер, диаграммалар және модельдер 
        жиынтығы берілген. Бұл визуалдар химиялық байланыстардың негізгі түрлері мен мысалдарын 
        көрсетеді. Суреттер мен диаграммалар химиялық құрылымдар мен молекулалық модельдерді 
        түсінуге көмектеседі.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {images.map((image) => (
          <div key={image.id} className="border border-gray-200 rounded-md overflow-hidden bg-white">
            <figure>
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-48 object-contain bg-white p-2"
              />
              <figcaption className="p-4 border-t border-gray-200">
                <h3 className="font-semibold mb-1">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-100 p-4 border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold mb-2">Рұқсат</h3>
        <p className="text-justify text-sm text-gray-600">
          Бұл галереядағы барлық суреттер Wikimedia Commons сайтынан алынған және Creative Commons 
          лицензиясы бойынша пайдаланылады. Суреттер рұқсатсыз сақталуы, көшірілуі және таратылуы мүмкін, 
          бірақ авторлық құқықтарды сақтау керек.
        </p>
      </div>
      
      <div className="bg-gray-100 p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Қараңыз</h3>
        <ul className="list-disc pl-6 text-blue-600">
          <li className="mb-1">
            <Link to="/types" className="hover:underline">Химиялық байланыс түрлері</Link>
          </li>
          <li className="mb-1">
            <Link to="/ionic" className="hover:underline">Иондық байланыс</Link>
          </li>
          <li>
            <Link to="/covalent" className="hover:underline">Коваленттік байланыс</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GalleryPage;
