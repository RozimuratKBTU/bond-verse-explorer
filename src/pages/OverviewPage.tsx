
import React from "react";
import { Link } from "react-router-dom";

const OverviewPage = () => {
  return (
    <div>
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold">Химиялық байланыстарға жалпы шолу</h1>
        <div className="flex justify-end text-sm text-blue-600">
          <Link to="#" className="hover:underline mx-2">Талқылау</Link>
          <Link to="#" className="hover:underline mx-2">Өңдеу</Link>
          <Link to="#" className="hover:underline mx-2">Тарихы</Link>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Химиялық байланыс не үшін керек?</h2>
        <p className="mb-4 text-justify">
          Химиялық байланыстар заттардың физикалық және химиялық қасиеттерін анықтайды. Олар атомдарға 
          тұрақты қосылыстар құруға мүмкіндік береді, бұл өз кезегінде біз күнделікті өмірде 
          пайдаланатын заттардың негізін құрайды.
        </p>
        
        <div className="text-center my-6">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Electron_shell_001_Hydrogen_-_no_label.svg/600px-Electron_shell_001_Hydrogen_-_no_label.svg.png" 
            alt="Сутегі атомының электрондық қабығы" 
            className="inline-block max-w-[250px] border border-gray-200"
          />
          <p className="text-sm text-gray-600 mt-2">Сутегі атомының электрондық қабығы</p>
        </div>
        
        <p className="mb-4 text-justify">
          Химиялық байланыссыз молекулалар, минералдар мен материалдар пайда болмас еді. Байланыстар 
          атомдарды бір-біріне байлап, тұрақты қосылыстар жасайды, бұл заттардың белгілі бір пішінге, 
          қатты денеге, сұйықтыққа немесе газға айналуын анықтайды.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Электрондар мен атомдар арасындағы әрекеттесу</h2>
        <p className="mb-4 text-justify">
          Атомның сыртқы электрон қабаты (валенттік қабат) химиялық реакцияларға қатысады. Атомдар 
          электрондарды қабылдауға, беруге немесе бөлісуге бейім, бұл олардың тұрақты конфигурацияға 
          — сегіз электроннан тұратын толық сыртқы қабатқа жетуге ұмтылуына байланысты.
        </p>
        <div className="text-center my-6">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Electron_shell_008_Oxygen_-_no_label.svg/600px-Electron_shell_008_Oxygen_-_no_label.svg.png" 
            alt="Оттегі атомының электрондық қабығы" 
            className="inline-block max-w-[250px] border border-gray-200"
          />
          <p className="text-sm text-gray-600 mt-2">Оттегі атомының электрондық қабығы</p>
        </div>
        <p className="mb-4 text-justify">
          <strong>Электрон беру</strong>: Кейбір атомдар (әсіресе металдар) электрон беруге бейім, бұл 
          оларды оң зарядталған иондарға айналдырады.
        </p>
        <p className="mb-4 text-justify">
          <strong>Электрон қабылдау</strong>: Басқа атомдар (әсіресе бейметаллдар) электрондарды 
          қабылдауға бейім, бұл оларды теріс зарядталған иондарға айналдырады.
        </p>
        <p className="text-justify">
          <strong>Электрондарды бөлісу</strong>: Атомдар сонымен қатар толық валенттік қабықшаларға 
          жету үшін өздерінің электрондарымен бөлісе алады.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Оқтет ережесі</h2>
        <p className="mb-4 text-justify">
          Көптеген атомдар (әсіресе периодтық кестенің 13-18 топтарының элементтері) сыртқы қабатта 
          сегіз электрон болатын "октет" құруға тырысады. Бұл ереже химиялық байланыстарды түсіну 
          кезінде негізгі қағидат болып табылады.
        </p>
        <p className="text-justify">
          Сутегі ерекше жағдай болып табылады — оның толық конфигурациясына жету үшін тек екі 
          электрон қажет (гелийге ұқсас).
        </p>
      </div>
      
      <div className="bg-gray-100 p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Тақырыптық санаттар</h3>
        <ul className="list-disc pl-6">
          <li className="mb-1">
            <Link to="/" className="text-blue-600 hover:underline">Химиялық байланыстар</Link>
          </li>
          <li className="mb-1">
            <Link to="/ionic" className="text-blue-600 hover:underline">Иондық байланыс</Link>
          </li>
          <li>
            <Link to="/covalent" className="text-blue-600 hover:underline">Коваленттік байланыс</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewPage;
