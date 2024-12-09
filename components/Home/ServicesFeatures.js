import { Truck, HeadphonesIcon, ShieldCheck } from "lucide-react";

export default function ServiceFeatures() {
  const features = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: ShieldCheck,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="container mx-auto px-4 ">
      <div className="flex justify-center gap-6 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border p-3 rounded-md w-full max-w-xs"
          >
            <div
              className="w-16 h-16 rounded-full bg-gray-100 hover:bg-black text-gray-900 hover:text-white flex items-center
               justify-center transition-transform duration-300 hover:scale-105 mb-3"
            >
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
