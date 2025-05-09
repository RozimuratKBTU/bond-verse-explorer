
import React from "react";
import { Link } from "react-router-dom";

const ApplicationPage = () => {
  return (
    <div>
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold">Химиялық байланыстардың қолданылуы</h1>
        <div className="flex justify-end text-sm text-blue-600">
          <Link to="#" className="hover:underline mx-2">Талқылау</Link>
          <Link to="#" className="hover:underline mx-2">Өңдеу</Link>
          <Link to="#" className="hover:underline mx-2">Тарихы</Link>
        </div>
      </div>
      
      <div className="table-of-contents mb-8 border border-gray-200 p-4 bg-gray-50">
        <h2 className="font-semibold mb-2">Мазмұны</h2>
        <ul className="list-decimal pl-6 text-blue-600">
          <li className="mb-1"><a href="#introduction" className="hover:underline">Кіріспе</a></li>
          <li className="mb-1"><a href="#industry" className="hover:underline">Өнеркәсіптегі қолданылуы</a></li>
          <li className="mb-1"><a href="#everyday" className="hover:underline">Күнделікті өмірдегі мысалдар</a></li>
          <li><a href="#research" className="hover:underline">Зерттеу саласындағы маңызы</a></li>
        </ul>
      </div>
      
      <div id="introduction" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Химиялық байланыстар қайда қолданылады?</h2>
        <p className="mb-4 text-justify">
          Химиялық байланыстар біздің күнделікті өмірімізде маңызды рөл атқарады. Олар тұрмыстық химиядан 
          бастап, медицина, энергетика және өндіріс саласына дейін әр түрлі салаларда қолданылады.
        </p>
        <p className="mb-4 text-justify">
          Химиялық байланыстарды түсіну заттардың қасиеттерін болжауға, жаңа материалдар жасауға және 
          химиялық реакцияларды бақылауға мүмкіндік береді. Бұл білім ғылым мен технологияның көптеген 
          салаларында қолданылады.
        </p>
        <p className="text-justify">
          Химиялық байланыс түрін білу (иондық, коваленттік немесе металдық) заттың физикалық және 
          химиялық қасиеттерін — оның еру қабілеті, балқу температурасы, электр өткізгіштігі және 
          реакцияға түсу қабілеті туралы маңызды ақпарат береді.
        </p>
      </div>
      
      <div id="industry" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Өнеркәсіптегі қолданылуы</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <div className="bg-gray-100 p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold">Тамақ өнеркәсібінде</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-6">
                <li className="mb-2">
                  <strong>Иондық байланыстар</strong> — тұз (NaCl) тамақ дәмдеуіш және консервант ретінде
                </li>
                <li className="mb-2">
                  <strong>Коваленттік байланыстар</strong> — қант молекулаласындағы C-O, C-H байланыстар
                </li>
                <li>
                  <strong>Сутектік байланыстар</strong> — желатин сияқты тамақ гельдерінің құрылымын анықтайды
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <div className="bg-gray-100 p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold">Материалтануда</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc pl-6">
                <li className="mb-2">
                  <strong>Металдық байланыстар</strong> — темір, алюминий сияқты конструкциялық материалдар
                </li>
                <li className="mb-2">
                  <strong>Коваленттік байланыстар</strong> — полимерлер, пластмассалар (полиэтилен, ПВХ)
                </li>
                <li>
                  <strong>Иондық байланыстар</strong> — керамика, цемент және шыны материалдар
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div id="everyday" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Күнделікті өмірдегі мысалдар</h2>
        
        <div className="float-right ml-6 mb-4 w-1/3 border border-gray-200 bg-white p-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Water_molecule_3D.svg" 
            alt="Су молекуласы" 
            className="w-full"
          />
          <p className="text-sm text-gray-600 mt-2 text-center">Су молекуласы (H₂O)</p>
        </div>
        
        <div className="mb-8">
          <h3 className="font-medium mb-2 text-lg">Су (H₂O)</h3>
          <p className="text-justify">
            Коваленттік байланыстар суды өмір үшін маңызды ете отырып, оның ерекше қасиеттерін анықтайды. 
            Су молекуласындағы сутектік байланыстар судың жоғары балқу және қайнау температурасына әсер етеді.
            Су барлық тіршіліктің негізі болып табылады және көптеген химиялық реакциялардың ортасы ретінде қызмет етеді.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="font-medium mb-2 text-lg">Пластикалық материалдар</h3>
          <p className="text-justify">
            Полиэтилен, полипропилен сияқты пластик түрлеріндегі коваленттік байланыстар оларға икемділік, 
            жеңілдік және тұрақтылық сияқты пайдалы қасиеттерін береді. Бұл қасиеттер пластиктерді қаптама 
            материалдары, тұрмыстық бұйымдар және медициналық құрылғылар жасау үшін қолайлы етеді.
          </p>
        </div>
        
        <div>
          <h3 className="font-medium mb-2 text-lg">Алюминий фольга</h3>
          <p className="text-justify">
            Металдық байланыстар алюминий атомдарын бір-бірімен байланыстырып, жеңіл, иілгіш және 
            жылу өткізетін материал жасайды, ол тағамдарды орау үшін пайдаланылады. Алюминийдің металдық 
            байланыстары оны электр тогын жақсы өткізгіш етеді.
          </p>
        </div>
      </div>
      
      <div id="research" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Химиялық байланыстардың зерттеу саласындағы маңызы</h2>
        <ul className="list-disc pl-6">
          <li className="mb-3">
            <strong>Фармацевтика</strong> — дәрілік препараттар молекулаларының дизайны мен синтезі.
            Дәрілердің әсер ету механизмі молекулалардың химиялық байланыстарына тікелей байланысты.
          </li>
          <li className="mb-3">
            <strong>Нанотехнология</strong> — атомдық және молекулалық деңгейде материалдар құру.
            Наноқұрылымдардың қасиеттері атомдар арасындағы байланыстармен анықталады.
          </li>
          <li className="mb-3">
            <strong>Катализ</strong> — химиялық реакциялар жылдамдығын арттыру.
            Катализаторлар реагенттермен уақытша химиялық байланыстар түзіп, реакция жылдамдығын арттырады.
          </li>
          <li>
            <strong>Энергетика</strong> — жаңа батареялар, отын элементтері және күн панельдерін әзірлеу.
            Энергияны сақтау және түрлендіру үшін химиялық байланыстарды пайдаланады.
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
            <Link to="/covalent" className="hover:underline">Коваленттік байланыс</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ApplicationPage;
