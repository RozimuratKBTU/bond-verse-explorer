
import React from "react";
import { Link } from "react-router-dom";

const TypesPage = () => {
  return (
    <div>
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold">Химиялық байланыс түрлері</h1>
        <div className="flex justify-end text-sm text-blue-600">
          <Link to="#" className="hover:underline mx-2">Талқылау</Link>
          <Link to="#" className="hover:underline mx-2">Өңдеу</Link>
          <Link to="#" className="hover:underline mx-2">Тарихы</Link>
        </div>
      </div>
      
      <div className="table-of-contents mb-8 border border-gray-200 p-4 bg-gray-50">
        <h2 className="font-semibold mb-2">Мазмұны</h2>
        <ul className="list-decimal pl-6 text-blue-600">
          <li className="mb-1"><a href="#ionic" className="hover:underline">Иондық байланыс</a></li>
          <li className="mb-1"><a href="#covalent" className="hover:underline">Коваленттік байланыс</a></li>
          <li><a href="#metallic" className="hover:underline">Металдық байланыс</a></li>
        </ul>
      </div>
      
      <p className="mb-6 text-justify">
        Химиялық байланыс түрі атомдардың электронтерістілігіне және электрондардың өзара әрекеттесу сипатына байланысты 
        анықталады. Химияда үш негізгі байланыс түрі бар: иондық, коваленттік және металдық.
      </p>
      
      <div id="ionic" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Иондық байланыс</h2>
        
        <div className="float-right ml-6 mb-4 w-1/3 border border-gray-200 bg-white p-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/NaCl_polyhedra.png/330px-NaCl_polyhedra.png" 
            alt="Натрий хлориді құрылымы" 
            className="w-full"
          />
          <p className="text-sm text-gray-600 mt-2 text-center">Натрий хлориді (NaCl) құрылымы</p>
        </div>
        
        <p className="mb-4 text-justify">
          <strong>Иондық байланыс</strong> — электрондарды бір атомнан екіншісіне толық беру арқылы жүзеге асады. 
          Бұл процесте әдетте металл атомы электронын бейметалл атомына береді, нәтижесінде оң және теріс 
          зарядталған иондар пайда болады.
        </p>
        
        <p className="mb-4 text-justify">
          Иондық байланыстың негізгі белгілері:
        </p>
        
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Электронтерістілігі жоғары айырмашылық (әдетте 1.7-ден астам)</li>
          <li className="mb-2">Бір атомнан екінші атомға электрондардың толық берілуі</li>
          <li className="mb-2">Оң және теріс иондардың пайда болуы</li>
          <li>Кристалдық тор құрылымының түзілуі</li>
        </ul>
        
        <p className="text-justify">
          Иондық қосылыстар қатты күйінде электр тогын өткізбейді, бірақ ерітіндіде немесе балқытылған 
          күйінде электр өткізгіш болып табылады. Мысалы: натрий хлориді (NaCl), калий йодиді (KI), 
          магний оксиді (MgO).
        </p>
      </div>
      
      <div id="covalent" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Коваленттік байланыс</h2>
        
        <div className="float-right ml-6 mb-4 w-1/3 border border-gray-200 bg-white p-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/3D_model_hydrogen_bonds_in_water.svg/450px-3D_model_hydrogen_bonds_in_water.svg.png" 
            alt="Су молекуласындағы коваленттік байланыс" 
            className="w-full"
          />
          <p className="text-sm text-gray-600 mt-2 text-center">Су молекуласындағы коваленттік байланыс (H₂O)</p>
        </div>
        
        <p className="mb-4 text-justify">
          <strong>Коваленттік байланыс</strong> — екі атом электрон жұбын бөліскен кезде пайда болатын 
          химиялық байланыс түрі. Бұл электрондар екі атомның да ядроларына бір уақытта тартылып, оларды 
          бір-біріне байланыстырады.
        </p>
        
        <p className="mb-4 text-justify">
          Коваленттік байланыстың түрлері:
        </p>
        
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>Полярлы коваленттік байланыс</strong> — әр түрлі электронтерістілігі бар атомдар арасындағы байланыс 
            (мысалы, HCl молекуласындағы H-Cl байланысы)
          </li>
          <li>
            <strong>Полярсыз коваленттік байланыс</strong> — бірдей электронтерістілігі бар атомдар арасындағы байланыс 
            (мысалы, H₂, O₂, N₂ молекулаларындағы байланыстар)
          </li>
        </ul>
        
        <p className="text-justify">
          Коваленттік байланыстың қасиеттері: жоғары беріктік, бағыттылық, қанықтылық. Мысалы: метан (CH₄), 
          су (H₂O), аммиак (NH₃).
        </p>
      </div>
      
      <div id="metallic" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Металдық байланыс</h2>
        
        <div className="float-right ml-6 mb-4 w-1/3 border border-gray-200 bg-white p-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Metal_crystal_structure_bcc.svg/330px-Metal_crystal_structure_bcc.svg.png" 
            alt="Металдық кристалдық тор" 
            className="w-full"
          />
          <p className="text-sm text-gray-600 mt-2 text-center">Металдың кристалдық торы (ОЦК)</p>
        </div>
        
        <p className="mb-4 text-justify">
          <strong>Металдық байланыс</strong> — металл атомдарының валенттік электрондары еркін қозғалып, бүкіл металл 
          бойына "электрондық теңіз" түзеді. Бұл электрондар оң зарядталған металл иондарын байланыстырады.
        </p>
        
        <p className="mb-4 text-justify">
          Металдық байланыстың қасиеттері:
        </p>
        
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Электр тогын жақсы өткізеді</li>
          <li className="mb-2">Жылуды жақсы өткізеді</li>
          <li className="mb-2">Жылтырлық</li>
          <li className="mb-2">Илемділік және соққылық</li>
          <li>Жоғары балқу температуралары (көптеген металлдар үшін)</li>
        </ul>
        
        <p className="text-justify">
          Таза металлдар (мысалы, темір, мыс, алтын) және көптеген металл қорытпалары металдық 
          байланыстарды көрсетеді.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Байланыс түрлерінің салыстырмалы сипаттамалары</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Байланыс түрі</th>
                <th className="border p-2 text-left">Түзілу механизмі</th>
                <th className="border p-2 text-left">Беріктігі</th>
                <th className="border p-2 text-left">Типтік мысалдар</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Иондық байланыс</td>
                <td className="border p-2">Электрондарды толық беру/қабылдау</td>
                <td className="border p-2">Жоғары, бірақ суда ериді</td>
                <td className="border p-2">NaCl, CaF₂</td>
              </tr>
              <tr>
                <td className="border p-2">Коваленттік байланыс</td>
                <td className="border p-2">Электрон жұптарын бөлісу</td>
                <td className="border p-2">Өте жоғары</td>
                <td className="border p-2">H₂O, CH₄</td>
              </tr>
              <tr>
                <td className="border p-2">Металдық байланыс</td>
                <td className="border p-2">Делокализацияланған электрондар</td>
                <td className="border p-2">Орташадан жоғарыға дейін</td>
                <td className="border p-2">Fe, Cu, Au</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Сыртқы сілтемелер</h3>
        <ul className="list-disc pl-6">
          <li className="mb-1">
            <a href="https://en.wikipedia.org/wiki/Chemical_bond" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Chemical bond - Wikipedia
            </a>
          </li>
          <li>
            <a href="https://www.acs.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              American Chemical Society
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TypesPage;
