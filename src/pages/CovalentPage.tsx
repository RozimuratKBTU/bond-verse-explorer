
import React from "react";
import { Link } from "react-router-dom";

const CovalentPage = () => {
  return (
    <div>
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold">Коваленттік байланыс</h1>
        <div className="flex justify-end text-sm text-blue-600">
          <Link to="#" className="hover:underline mx-2">Талқылау</Link>
          <Link to="#" className="hover:underline mx-2">Өңдеу</Link>
          <Link to="#" className="hover:underline mx-2">Тарихы</Link>
        </div>
      </div>
      
      <div className="table-of-contents mb-8 border border-gray-200 p-4 bg-gray-50">
        <h2 className="font-semibold mb-2">Мазмұны</h2>
        <ul className="list-decimal pl-6 text-blue-600">
          <li className="mb-1"><a href="#definition" className="hover:underline">Анықтамасы</a></li>
          <li className="mb-1"><a href="#example" className="hover:underline">Су молекуласы мысалы</a></li>
          <li className="mb-1"><a href="#types" className="hover:underline">Коваленттік байланыс түрлері</a></li>
          <li><a href="#properties" className="hover:underline">Коваленттік байланыстың ерекшеліктері</a></li>
        </ul>
      </div>
      
      <div id="definition" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Коваленттік байланыс дегеніміз не?</h2>
        
        <div className="float-right ml-6 mb-4 w-1/3 border border-gray-200 bg-white p-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Kovalente_binding.svg/640px-Kovalente_binding.svg.png" 
            alt="Коваленттік байланыстың сызбасы" 
            className="w-full"
          />
          <p className="text-sm text-gray-600 mt-2 text-center">Коваленттік байланыстың сызбасы</p>
        </div>
        
        <p className="mb-4 text-justify">
          <strong>Коваленттік байланыс</strong> — екі атом электрон жұбын бөліскен кезде пайда болатын химиялық байланыс түрі. 
          Бұл электрондар екі атомның да ядроларына бір уақытта тартылып, екі атомды бір-біріне 
          байланыстырады.
        </p>
        <p className="mb-4 text-justify">
          Коваленттік байланыстар әдетте бейметалл атомдары арасында пайда болады. Олар өте мықты 
          байланыстар болып табылады және табиғатта кең таралған — органикалық қосылыстардың барлығы 
          дерлік осы байланыс түрін қамтиды.
        </p>
        <p className="mb-4 text-justify">
          Коваленттік байланыстың иондық байланыстан негізгі айырмашылығы — электрондар атомдар арасында бөлінеді, 
          бір атомнан екінші атомға толық берілмейді.
        </p>
      </div>
      
      <div id="example" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Мысал: Су молекуласы (H₂O)</h2>
        
        <div className="my-6 text-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/3D_model_hydrogen_bonds_in_water.svg/450px-3D_model_hydrogen_bonds_in_water.svg.png" 
            alt="Су молекуласындағы коваленттік байланыс" 
            className="mx-auto max-w-md border border-gray-200"
          />
          <p className="text-sm text-gray-600 mt-2">
            Су молекуласындағы коваленттік байланыс (H₂O)
          </p>
        </div>
        
        <p className="mb-4 text-justify">
          Су молекуласы — коваленттік байланыстың жақсы мысалы:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            Оттегі атомының (O) сыртқы қабатында 6 электрон бар, ал толық қабатта 8 электрон болуы керек.
          </li>
          <li className="mb-2">
            Әр сутегі атомында (H) 1 электрон бар, оған тағы 1 электрон қажет (гелий конфигурациясына жету үшін).
          </li>
          <li className="mb-2">
            Оттегі атомы сутегінің екі атомымен электрон жұптарын бөліседі, нәтижесінде H₂O молекуласы пайда болады.
          </li>
          <li>
            Бұл екі коваленттік байланысты (O-H байланыстары) және бөліспеген электрон жұптарын қамтитын су молекуласын құрайды.
          </li>
        </ul>
        <p className="mb-4 text-justify">
          Су молекуласының бұрышы шамамен 104.5°, бұл оттегі атомындағы бөліспеген электрон жұптарының 
          өзара итерілісімен түсіндіріледі.
        </p>
      </div>
      
      <div id="types" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Коваленттік байланыс түрлері</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-xl font-medium mb-3">Полярлы коваленттік байланыс</h3>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dipole.svg/800px-Dipole.svg.png" 
              alt="Полярлы коваленттік байланыс" 
              className="w-full h-40 object-contain mb-3"
            />
            <p className="mb-3 text-justify">
              Полярлы коваленттік байланыс электрондық тығыздықтың бір атомға қарай ауысуы нәтижесінде пайда болады. 
              Бұл әр түрлі электртерістілігі бар атомдар арасында орын алады.
            </p>
            <p className="font-medium">
              <strong>Мысал:</strong> H₂O, HCl, NH₃
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-xl font-medium mb-3">Полярсыз коваленттік байланыс</h3>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Kovalente_binding.svg/640px-Kovalente_binding.svg.png" 
              alt="Полярсыз коваленттік байланыс" 
              className="w-full h-40 object-contain mb-3"
            />
            <p className="mb-3 text-justify">
              Полярсыз коваленттік байланыс электрондық тығыздықтың атомдар арасында бірдей таралуы 
              нәтижесінде пайда болады. Бұл бірдей электртерістілігі бар атомдар арасында орын алады.
            </p>
            <p className="font-medium">
              <strong>Мысал:</strong> H₂, O₂, N₂
            </p>
          </div>
        </div>
      </div>
      
      <div id="properties" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Коваленттік байланыстың ерекшеліктері</h2>
        <ul className="list-disc pl-6">
          <li className="mb-3">
            <strong>Байланыс энергиясы</strong> — жоғары, бұл коваленттік байланыстардың мықтылығын көрсетеді.
            Мысалы, C-C байланысының энергиясы шамамен 346 кДж/моль.
          </li>
          <li className="mb-3">
            <strong>Бағыттылық</strong> — байланыстар белгілі бір бағытта орналасады. Атомдардың гибридтелуіне 
            байланысты бұрыштары әр түрлі болады (мысалы, sp³ гибридтеуінде 109.5°).
          </li>
          <li className="mb-3">
            <strong>Қанықтылық</strong> — атомдар шектеулі санда коваленттік байланыс түзе алады. Мысалы, көміртегі 
            төрт байланыс, азот үш байланыс, оттегі екі байланыс жасай алады.
          </li>
          <li>
            <strong>Электрондардың делокализациясы</strong> — кейбір молекулаларда электрондар бірнеше атомға таралуы мүмкін.
            Бұл құбылыс бензол сақинасы сияқты ароматты қосылыстарда байқалады.
          </li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Коваленттік байланысты қосылыстар мысалдары</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            <strong>Метан (CH₄)</strong> — табиғи газдың негізгі компоненті. Көміртегі атомы төрт сутегі атомымен 
            коваленттік байланыс түзеді.
          </li>
          <li className="mb-2">
            <strong>Көмірқышқыл газы (CO₂)</strong> — атмосфералық газ, фотосинтез үшін қажет. Көміртегі атомы екі 
            оттегі атомымен қос байланыстар түзеді.
          </li>
          <li className="mb-2">
            <strong>Аммиак (NH₃)</strong> — тыңайтқыштар жасауда қолданылады. Азот атомы үш сутегі атомымен 
            коваленттік байланыс түзеді.
          </li>
          <li>
            <strong>Сірке қышқылы (CH₃COOH)</strong> — сірке суы өндірісінде қолданылады. Құрылымында C-C, C-H, C-O 
            және O-H коваленттік байланыстары бар.
          </li>
        </ul>
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
            <Link to="/application" className="hover:underline">Химиялық байланыстардың қолданылуы</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CovalentPage;
