import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Princing Alaska',
 description: 'Princing lists Alaska Ecommerce',
};

export default function PrincingPage() {
  return (
    <div>
      <h1 className="text-7xl">Princing Page</h1>
    </div>
  );
}