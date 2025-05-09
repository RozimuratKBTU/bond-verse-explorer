
import React from "react";

const GalleryPage = () => {
  // Gallery images with descriptions
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Атом моделі",
      description: "Атомның құрылымдық моделі, электрондардың ядро айналасындағы орбиталдары көрсетілген."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Электрондық орбиталдар",
      description: "Электрондардың атом орбиталдарында орналасуы."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Иондық байланыс",
      description: "Натрий хлоридіндегі (NaCl) иондық байланыстың схемалық көрінісі."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      title: "Коваленттік байланыс",
      description: "Судағы (H₂O) коваленттік байланыстың схемалық көрінісі."
    },
    {
      id: 5,
      url: "https://plus.unsplash.com/premium_photo-1682096122304-fa650dbc5c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Металдық байланыс",
      description: "Металл құрылымындағы электрондардың делокализациясы."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1627633555637-a66f07380bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Сутектік байланыс",
      description: "Су молекулалары арасындағы сутектік байланыстардың схемасы."
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Молекулалық модель",
      description: "Күрделі органикалық қосылыстың үш өлшемді молекулалық моделі."
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Кристалдық тор",
      description: "Иондық қосылыстың кристалдық торының құрылымы."
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Химиялық байланыстар галереясы</h1>
      
      <p className="mb-8">
        Бұл галереяда атомдар, молекулалар және химиялық байланыстардың әр түрлі модельдері мен 
        визуалды көріністері ұсынылған. Бұл суреттер химиялық байланыстардың құрылымы мен қасиеттерін 
        жақсырақ түсінуге көмектеседі.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div key={image.id} className="border rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
              <p className="text-sm text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-secondary rounded-lg">
        <h2 className="text-xl font-semibold mb-4">3D модельдер және анимациялар</h2>
        <p>
          Химиялық байланыстарды жақсырақ түсіну үшін жоғарыда көрсетілген статикалық суреттерден 
          басқа, интерактивті 3D модельдер мен анимацияларды пайдалануға болады. Бұл ресурстар 
          молекулалардың кеңістіктегі орналасуын және байланыстардың түзілу процесін көрнекі 
          түрде көрсетеді.
        </p>
      </div>
    </div>
  );
};

export default GalleryPage;
