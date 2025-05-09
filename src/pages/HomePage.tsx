
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold">Химиялық байланыстар</h1>
        <div className="flex justify-end text-sm text-blue-600">
          <Link to="#" className="hover:underline mx-2">Талқылау</Link>
          <Link to="#" className="hover:underline mx-2">Өңдеу</Link>
          <Link to="#" className="hover:underline mx-2">Тарихы</Link>
        </div>
      </div>
      
      <div className="mb-8">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/3D_model_hydrogen_bonds_in_water.svg/800px-3D_model_hydrogen_bonds_in_water.svg.png" 
          alt="Химиялық байланыстар моделі" 
          className="float-right ml-6 mb-4 w-1/3 border border-gray-200"
        />
        
        <p className="mb-4 text-justify">
          <strong>Химиялық байланыс</strong> — атомдар мен молекулалар арасындағы тұрақты өзара әрекеттесу. 
          Бұл байланыстар атомдардың тұрақты қосылыстарды — молекулаларды, кристалдарды 
          және басқа химиялық құрылымдарды құру үшін бірігуіне мүмкіндік береді.
        </p>
        <p className="mb-4 text-justify">
          Химиялық байланыстың негізінде электрондық өзара әрекеттесу жатыр. Атомдар электрондары 
          арқылы әрекеттеседі, олар электрондарымен алмасады немесе бөліседі, нәтижесінде тұрақты 
          конфигурацияға ұмтылады.
        </p>
        <p className="text-justify">
          Химиялық байланыстар органикалық және бейорганикалық қосылыстардың құрылымы мен қасиетін 
          анықтайтын іргелі құбылыс болып табылады. Байланыс түрін білу заттардың қасиеттерін және 
          олардың химиялық реакцияларда өзін қалай ұстайтынын түсінуге көмектеседі.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Химиялық байланыстардың маңыздылығы</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Молекулалық құрылымдардың тұрақтылығын қамтамасыз етеді</li>
          <li className="mb-2">Заттардың физикалық және химиялық қасиеттерін анықтайды</li>
          <li className="mb-2">Жаңа материалдар мен қосылыстарды синтездеуге негіз болады</li>
          <li className="mb-2">Биологиялық процестерде маңызды рөл атқарады</li>
          <li>Фармацевтика, материалтану және басқа салаларда қолданылады</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Негізгі байланыс түрлері</h2>
        <p className="mb-4">
          Химияда негізгі үш байланыс түрі бар:
        </p>
        <ol className="list-decimal pl-6">
          <li className="mb-3">
            <strong><Link to="/ionic" className="text-blue-600 hover:underline">Иондық байланыс</Link></strong> — электрондарды бір атомнан екіншісіне толық беру арқылы жүзеге асады. 
            Бұл электронтерістілігі әр түрлі элементтер (әдетте метал және бейметалл) арасында пайда болады.
          </li>
          <li className="mb-3">
            <strong><Link to="/covalent" className="text-blue-600 hover:underline">Коваленттік байланыс</Link></strong> — атомдар электрон жұптарымен бөліседі.
            Бұл электронтерістілігі жақын элементтер арасында (әдетте бейметаллдар арасында) пайда болады.
          </li>
          <li>
            <strong>Металдық байланыс</strong> — металл атомдары арасында пайда болады, электрондар еркін қозғалады.
            Бұл металл атомдарының арасындағы байланыс, мұнда валенттік электрондар "электрондық теңіз" түзеді.
          </li>
        </ol>
      </div>
      
      <div className="bg-gray-100 p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Сілтемелер</h3>
        <ol className="list-decimal pl-6 text-sm">
          <li className="mb-1">
            <a href="https://kk.wikipedia.org/wiki/Химиялық_байланыс" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Қазақша Уикипедия - Химиялық байланыс
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Chemical_bond" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Ағылшынша Уикипедия - Chemical bond
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomePage;
