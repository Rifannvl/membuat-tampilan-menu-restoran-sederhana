import PriceCard from "../components/PriceCard";
export default function Home() {
  const prices = [
    {
      price: "$19",
      title: "Starter",
      description: "Unleash the power of automation.",
      points: ["Multi-step Zap", "3 Premium Apps", "2 Users Team"],
    },
    {
      price: "$54",
      title: "Professional",
      description: "Automation tools to take your work to the next level.",
      points: [
        "Multi-step Zap",
        "Unlimited Premium Apps",
        "50 Users team",
        "Shared Workspace",
      ],
    },
    {
      price: "$89",
      title: "Company",
      description: "Automation plus enterprise-grade features.",
      points: [
        "Multi-step Zaps",
        "Unlimited Premium Apps",
        "Unlimited user Team",
        "Advanced Admin",
        "Custom Data Retention",
      ],
    },
  ];
  return (
    <div className="container">
      <p>Home</p>
      <div className="grid grid-cols-3 gap-3">
        {prices.map((price, index) => (
          <PriceCard key={index} {...price} />
        ))}
      </div>
    </div>
  );
}
