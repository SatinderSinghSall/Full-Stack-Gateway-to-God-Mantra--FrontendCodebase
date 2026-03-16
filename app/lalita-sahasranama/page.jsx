import Navbar from "@/components/Navbar";
import { lalitaSahasranama } from "@/data/lalitaSahasranama";
import { Card, CardContent } from "@/components/ui/card";

export default function LalitaPage() {
  return (
    <div>
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">
        <h1 className="text-3xl font-bold text-center">Lalita Sahasranama</h1>

        <img src="/lalita.jpg" className="rounded-xl mx-auto" />

        <div className="space-y-4">
          {lalitaSahasranama.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-5">
                <p className="font-semibold text-pink-600">{item.name}</p>

                <p className="text-gray-600">{item.meaning}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
