
import React from "react";

const TypesPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Химиялық байланыс түрлері</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Иондық байланыс */}
        <div className="border rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-xl font-semibold">Иондық байланыс</h2>
          </div>
          <div className="p-4">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Иондық байланыс" 
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p className="mb-4">
              Иондық байланыс — электрондарды бір атомнан екінші атомға толық беру арқылы пайда болады. 
              Бұл процесте бір атом электрон(дар) береді және оң зарядталған ионға айналады, ал екіншісі 
              электрон(дар) қабылдап, теріс зарядталған ионға айналады.
            </p>
            <p className="font-medium">Мысал: натрий хлориді (NaCl)</p>
          </div>
        </div>
        
        {/* Коваленттік байланыс */}
        <div className="border rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-xl font-semibold">Коваленттік байланыс</h2>
          </div>
          <div className="p-4">
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
              alt="Коваленттік байланыс" 
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p className="mb-4">
              Коваленттік байланыс — екі атом электрон жұбын бөліскенде пайда болады. Бөліскен 
              электрондар екі атомның ядроларына тартылып, оларды бір-біріне байлайды.
            </p>
            <p className="font-medium">Мысал: су молекуласы (H₂O)</p>
          </div>
        </div>
        
        {/* Металдық байланыс */}
        <div className="border rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-xl font-semibold">Металдық байланыс</h2>
          </div>
          <div className="p-4">
            <img 
              src="https://plus.unsplash.com/premium_photo-1682096122304-fa650dbc5c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Металдық байланыс" 
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p className="mb-4">
              Металдық байланыс — металл атомдарының валенттік электрондары еркін қозғалып, бүкіл металл 
              бойына "электрондық теңіз" түзеді. Бұл электрондар оң зарядталған металл иондарын 
              байланыстырады.
            </p>
            <p className="font-medium">Мысал: темір (Fe), алтын (Au)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Байланыс түрлерінің салыстырмалы сипаттамалары</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-secondary">
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
    </div>
  );
};

export default TypesPage;
