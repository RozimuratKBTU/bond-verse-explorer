
import React from "react";
import { Link } from "react-router-dom";

const IonicPage = () => {
  return (
    <div>
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold">Иондық байланыс</h1>
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
          <li className="mb-1"><a href="#example" className="hover:underline">Натрий хлориді мысалы</a></li>
          <li><a href="#properties" className="hover:underline">Иондық қосылыстардың қасиеттері</a></li>
        </ul>
      </div>
      
      <div id="definition" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Иондық байланыс дегеніміз не?</h2>
        
        <div className="float-right ml-6 mb-4 w-1/3 border border-gray-200 bg-white p-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Ionic_bonding.svg/690px-Ionic_bonding.svg.png" 
            alt="Иондық байланыстың пайда болуы" 
            className="w-full"
          />
          <p className="text-sm text-gray-600 mt-2 text-center">Иондық байланыстың пайда болу сызбасы</p>
        </div>
        
        <p className="mb-4 text-justify">
          <strong>Иондық байланыс</strong> — электрондарды бір атомнан екіншісіне толық беру нәтижесінде пайда болатын 
          химиялық байланыс түрі. Бұл процесте әдетте металл атомы электронын бейметалл атомына береді.
        </p>
        <p className="mb-4 text-justify">
          Нәтижесінде металл атомы оң зарядталған ионға (катион) айналады, ал бейметалл атомы теріс 
          зарядталған ионға (анион) айналады. Қарама-қарсы зарядталған иондар бір-біріне электростатикалық 
          тартылыс күшімен тартылады, бұл иондық байланысты құрайды.
        </p>
        <p className="mb-4 text-justify">
          Иондық байланыс электронтерістілігі өте жоғары айырмашылық бар атомдар арасында пайда болады. 
          Мұндай жағдайда бір атом электронды беруге, ал екіншісі оны қабылдауға бейім.
        </p>
      </div>
      
      <div id="example" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Мысал: Натрий хлориді (NaCl)</h2>
        
        <div className="my-6 text-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/NaCl_polyhedra.png/330px-NaCl_polyhedra.png" 
            alt="Натрий хлориді" 
            className="mx-auto max-w-md border border-gray-200"
          />
          <p className="text-sm text-gray-600 mt-2">
            Натрий хлоридінің кристалдық торы
          </p>
        </div>
        
        <p className="mb-4 text-justify">
          Натрий хлориді (ас тұзы) — иондық байланыстың классикалық мысалы:
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li className="mb-2">
            Натрий атомы (Na) өзінің сыртқы қабатындағы жалғыз электронын бере отырып, Na⁺ катионын түзеді.
          </li>
          <li className="mb-2">
            Хлор атомы (Cl) бұл электронды қабылдап, Cl⁻ анионын құрайды.
          </li>
          <li>
            Na⁺ және Cl⁻ иондары электростатикалық тартылыс арқылы NaCl кристалын құрайды.
          </li>
        </ol>
        <p className="mb-4 text-justify">
          Формуламен: Na + Cl → Na⁺ + Cl⁻ → NaCl
        </p>
        <p className="mb-4 text-justify">
          Натрий хлориді кристалында әрбір Na⁺ ионын 6 Cl⁻ ионы қоршап тұрады және әрбір Cl⁻ ионын 
          6 Na⁺ ионы қоршап тұрады, бұл кристалдық тордың үш өлшемді құрылымын құрайды.
        </p>
      </div>
      
      <div id="properties" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Иондық қосылыстардың қасиеттері</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-3">
            <strong>Жоғары балқу және қайнау температурасы</strong> — иондар арасындағы күшті тартылыс салдарынан.
            Мысалы, натрий хлоридінің балқу температурасы 801°C.
          </li>
          <li className="mb-3">
            <strong>Кристалдық құрылым</strong> — иондар кристалдық тор түзетін белгілі бір ретпен орналасады.
            Бұл қатты күйдегі иондық қосылыстардың қатты және сынғыш болуына әкеледі.
          </li>
          <li className="mb-3">
            <strong>Ерігіштік</strong> — көптеген иондық қосылыстар суда жақсы ериді. Су сияқты полярлы 
            еріткіштер иондарды бір-бірінен бөліп, гидратталған иондар түзеді.
          </li>
          <li className="mb-3">
            <strong>Электр өткізгіштік</strong> — балқыған немесе ерітілген күйінде электр тогын өткізеді,
            өйткені иондар еркін қозғала алады. Қатты күйінде өткізгіш емес, өйткені иондар кристалдық 
            торға бекітілген.
          </li>
          <li>
            <strong>Морттылық</strong> — механикалық соққылардан оңай сынады. Бұл кристалдық тордың 
            бұзылуымен түсіндіріледі.
          </li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">Басқа иондық қосылыстар</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2"><strong>Калий хлориді (KCl)</strong> — тыңайтқыш және тұз алмастырғыш ретінде қолданылады.</li>
          <li className="mb-2"><strong>Кальций хлориді (CaCl₂)</strong> — мұз еріткіш және ылғал сіңіргіш ретінде қолданылады.</li>
          <li className="mb-2"><strong>Магний оксиді (MgO)</strong> — отқа төзімді материалдар мен фармацевтикалық өнімдерде қолданылады.</li>
          <li><strong>Натрий гидроксиді (NaOH)</strong> — сабын өндірісінде және өнеркәсіптік тазалау құралы ретінде қолданылады.</li>
        </ul>
      </div>
      
      <div className="bg-gray-100 p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Қараңыз</h3>
        <ul className="list-disc pl-6 text-blue-600">
          <li className="mb-1">
            <Link to="/types" className="hover:underline">Химиялық байланыс түрлері</Link>
          </li>
          <li className="mb-1">
            <Link to="/covalent" className="hover:underline">Коваленттік байланыс</Link>
          </li>
          <li>
            <Link to="/application" className="hover:underline">Химиялық байланыстардың қолданылуы</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IonicPage;
