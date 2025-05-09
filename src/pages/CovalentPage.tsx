
import React from "react";

const CovalentPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Коваленттік байланыс</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Коваленттік байланыс дегеніміз не?</h2>
        <p className="mb-4">
          Коваленттік байланыс — екі атом электрон жұбын бөліскен кезде пайда болатын химиялық байланыс түрі. 
          Бұл электрондар екі атомның да ядроларына бір уақытта тартылып, екі атомды бір-біріне 
          байланыстырады.
        </p>
        <p>
          Коваленттік байланыстар әдетте бейметалл атомдары арасында пайда болады. Олар өте мықты 
          байланыстар болып табылады және табиғатта кең таралған — органикалық қосылыстардың барлығы 
          дерлік осы байланыс түрін қамтиды.
        </p>
      </div>
      
      <div className="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
          alt="Коваленттік байланыс" 
          className="mx-auto my-6 max-w-md rounded-lg shadow-md"
        />
        <p className="text-center text-sm text-muted-foreground mb-6">
          Коваленттік байланыс: атомдар арасындағы электрон жұптарын бөлісу
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Мысал: Су молекуласы (H₂O)</h2>
        <p className="mb-4">
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
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Коваленттік байланыс түрлері</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Полярлы коваленттік байланыс</h3>
            <p className="mb-3">
              Полярлы коваленттік байланыс электрондық тығыздықтың бір атомға қарай ауысуы нәтижесінде пайда болады. 
              Бұл әр түрлі электртерістілігі бар атомдар арасында орын алады.
            </p>
            <p>
              <strong>Мысал:</strong> H₂O, HCl, NH₃
            </p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-medium mb-2">Полярсыз коваленттік байланыс</h3>
            <p className="mb-3">
              Полярсыз коваленттік байланыс электрондық тығыздықтың атомдар арасында бірдей таралуы 
              нәтижесінде пайда болады. Бұл бірдей электртерістілігі бар атомдар арасында орын алады.
            </p>
            <p>
              <strong>Мысал:</strong> H₂, O₂, N₂
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Коваленттік байланыстың ерекшеліктері</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2"><strong>Байланыс энергиясы</strong> — жоғары, бұл коваленттік байланыстардың мықтылығын көрсетеді.</li>
          <li className="mb-2"><strong>Бағыттылық</strong> — байланыстар белгілі бір бағытта орналасады.</li>
          <li className="mb-2"><strong>Қанықтылық</strong> — атомдар шектеулі санда коваленттік байланыс түзе алады.</li>
          <li><strong>Электрондардың делокализациясы</strong> — кейбір молекулаларда электрондар бірнеше атомға таралуы мүмкін.</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Коваленттік байланысты қосылыстар мысалдары</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2"><strong>Метан (CH₄)</strong> — табиғи газдың негізгі компоненті.</li>
          <li className="mb-2"><strong>Көмірқышқыл газы (CO₂)</strong> — атмосфералық газ, фотосинтез үшін қажет.</li>
          <li className="mb-2"><strong>Аммиак (NH₃)</strong> — тыңайтқыштар жасауда қолданылады.</li>
          <li><strong>Сірке қышқылы (CH₃COOH)</strong> — сірке суы өндірісінде қолданылады.</li>
        </ul>
      </div>
    </div>
  );
};

export default CovalentPage;
