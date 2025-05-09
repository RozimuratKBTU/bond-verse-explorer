
import React from "react";

const ApplicationPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Химиялық байланыстардың қолданылуы</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Химиялық байланыстар қайда қолданылады?</h2>
        <p className="mb-4">
          Химиялық байланыстар біздің күнделікті өмірімізде маңызды рөл атқарады. Олар тұрмыстық химиядан 
          бастап, медицина, энергетика және өндіріс саласына дейін әр түрлі салаларда қолданылады.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="border rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-xl font-semibold">Тамақ өнеркәсібінде</h2>
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
        
        <div className="border rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-xl font-semibold">Материалтануда</h2>
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
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Өмірдегі мысалдар</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded p-4">
            <h3 className="font-medium mb-2">Су (H₂O)</h3>
            <p>
              Коваленттік байланыстар суды өмір үшін маңызды ете отырып, оның ерекше қасиеттерін анықтайды. 
              Су молекуласындағы сутектік байланыстар судың жоғары балқу және қайнау температурасына әсер етеді.
            </p>
          </div>
          
          <div className="border rounded p-4">
            <h3 className="font-medium mb-2">Пластикалық материалдар</h3>
            <p>
              Полиэтилен, полипропилен сияқты пластик түрлеріндегі коваленттік байланыстар оларға икемділік, 
              жеңілдік және тұрақтылық сияқты пайдалы қасиеттерін береді.
            </p>
          </div>
          
          <div className="border rounded p-4">
            <h3 className="font-medium mb-2">Алюминий фольга</h3>
            <p>
              Металдық байланыстар алюминий атомдарын бір-бірімен байланыстырып, жеңіл, иілгіш және 
              жылу өткізетін материал жасайды, ол тағамдарды орау үшін пайдаланылады.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Химиялық байланыстардың оқу видеосы</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            className="w-full h-[400px]"
            src="https://www.youtube.com/embed/5OUoy6q_WFc" 
            title="Химиялық байланыстар туралы видео" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Химиялық байланыстардың зерттеу саласындағы маңызы</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            <strong>Фармацевтика</strong> — дәрілік препараттар молекулаларының дизайны мен синтезі
          </li>
          <li className="mb-2">
            <strong>Нанотехнология</strong> — атомдық және молекулалық деңгейде материалдар құру
          </li>
          <li className="mb-2">
            <strong>Катализ</strong> — химиялық реакциялар жылдамдығын арттыру
          </li>
          <li>
            <strong>Энергетика</strong> — жаңа батареялар, отын элементтері және күн панельдерін әзірлеу
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ApplicationPage;
