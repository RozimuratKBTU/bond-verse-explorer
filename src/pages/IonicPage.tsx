
import React from "react";

const IonicPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Иондық байланыс</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Иондық байланыс дегеніміз не?</h2>
        <p className="mb-4">
          Иондық байланыс — электрондарды бір атомнан екіншісіне толық беру нәтижесінде пайда болатын 
          химиялық байланыс түрі. Бұл процесте әдетте металл атомы электронын бейметалл атомына береді.
        </p>
        <p>
          Нәтижесінде металл атомы оң зарядталған ионға (катион) айналады, ал бейметалл атомы теріс 
          зарядталған ионға (анион) айналады. Қарама-қарсы зарядталған иондар бір-біріне электростатикалық 
          тартылыс күшімен тартылады, бұл иондық байланысты құрайды.
        </p>
      </div>
      
      <div className="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Иондық байланыс сызбасы" 
          className="mx-auto my-6 max-w-md rounded-lg shadow-md"
        />
        <p className="text-center text-sm text-muted-foreground mb-6">
          Иондық байланыс: электрон беру және қабылдау процесі
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Мысал: Натрий хлориді (NaCl)</h2>
        <p className="mb-4">
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
        <p>
          Формуламен: Na + Cl → Na⁺ + Cl⁻ → NaCl
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Иондық қосылыстардың қасиеттері</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2"><strong>Жоғары балқу және қайнау температурасы</strong> — иондар арасындағы күшті тартылыс салдарынан.</li>
          <li className="mb-2"><strong>Кристалдық құрылым</strong> — иондар кристалдық тор түзетін белгілі бір ретпен орналасады.</li>
          <li className="mb-2"><strong>Ерігіштік</strong> — көптеген иондық қосылыстар суда жақсы ериді.</li>
          <li className="mb-2"><strong>Электр өткізгіштік</strong> — балқыған немесе ерітілген күйінде электр тогын өткізеді.</li>
          <li><strong>Морттылық</strong> — механикалық соққылардан оңай сынады.</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Басқа иондық қосылыстар</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2"><strong>Калий хлориді (KCl)</strong> — тыңайтқыш және тұз алмастырғыш ретінде қолданылады.</li>
          <li className="mb-2"><strong>Кальций хлориді (CaCl₂)</strong> — мұз еріткіш және ылғал сіңіргіш ретінде қолданылады.</li>
          <li className="mb-2"><strong>Магний оксиді (MgO)</strong> — отқа төзімді материалдар мен фармацевтикалық өнімдерде қолданылады.</li>
          <li><strong>Натрий гидроксиді (NaOH)</strong> — сабын өндірісінде және өнеркәсіптік тазалау құралы ретінде қолданылады.</li>
        </ul>
      </div>
    </div>
  );
};

export default IonicPage;
